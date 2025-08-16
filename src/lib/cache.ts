import Dexie, { Table } from 'dexie';
import type { Tour, CachedTour } from '@/types/tour';

// Cache duration: 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;

// Dexie database class
class TourCacheDB extends Dexie {
  tours!: Table<CachedTour>;

  constructor() {
    super('TourCacheDB');

    // Define schema
    this.version(1).stores({
      tours: 'id, location, category, cached_at',
    });
  }
}

// Create database instance
const db = new TourCacheDB();

// Tour cache utility class
export class TourCache {
  // Get single tour from cache
  static async get(id: string): Promise<Tour | null> {
    try {
      const cached = await db.tours.get(id);

      if (!cached) {
        return null;
      }

      // Check if cache is expired
      const isExpired = Date.now() - cached.cached_at > CACHE_DURATION;
      if (isExpired) {
        await db.tours.delete(id);
        return null;
      }

      // Return tour without cache metadata
      const { cached_at: _, ...tour } = cached;
      return tour;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  // Save single tour to cache
  static async set(tour: Tour): Promise<void> {
    try {
      const cachedTour: CachedTour = {
        ...tour,
        cached_at: Date.now(),
      };

      await db.tours.put(cachedTour);
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }

  // Get multiple tours from cache
  static async getMany(filters: Record<string, unknown> = {}): Promise<Tour[]> {
    try {
      const cutoffTime = Date.now() - CACHE_DURATION;

      let query = db.tours.where('cached_at').above(cutoffTime);

      // Apply filters
      if (filters.location && typeof filters.location === 'string') {
        const location = filters.location;
        query = query.and(tour =>
          tour.location.toLowerCase().includes(location.toLowerCase())
        );
      }

      if (filters.category && typeof filters.category === 'string') {
        const category = filters.category;
        query = query.and(tour => tour.category === category);
      }

      const cachedTours = await query.toArray();

      // Return tours without cache metadata
      return cachedTours.map(({ cached_at: _, ...tour }) => tour);
    } catch (error) {
      console.error('Cache getMany error:', error);
      return [];
    }
  }

  // Save multiple tours to cache
  static async setMany(tours: Tour[]): Promise<void> {
    try {
      const cachedTours: CachedTour[] = tours.map(tour => ({
        ...tour,
        cached_at: Date.now(),
      }));

      await db.tours.bulkPut(cachedTours);
    } catch (error) {
      console.error('Cache setMany error:', error);
    }
  }

  // Clear all cached tours
  static async clear(): Promise<void> {
    try {
      await db.tours.clear();
    } catch (error) {
      console.error('Cache clear error:', error);
    }
  }

  // Clear expired cache entries
  static async clearExpired(): Promise<void> {
    try {
      const cutoffTime = Date.now() - CACHE_DURATION;
      await db.tours.where('cached_at').below(cutoffTime).delete();
    } catch (error) {
      console.error('Cache clearExpired error:', error);
    }
  }

  // Get cache statistics
  static async getStats(): Promise<{ total: number; expired: number }> {
    try {
      const total = await db.tours.count();
      const cutoffTime = Date.now() - CACHE_DURATION;
      const expired = await db.tours
        .where('cached_at')
        .below(cutoffTime)
        .count();

      return { total, expired };
    } catch (error) {
      console.error('Cache getStats error:', error);
      return { total: 0, expired: 0 };
    }
  }
}

// Export the cache instance
export const tourCache = TourCache;
