'use client';

import { useState, useEffect, useCallback } from 'react';
import { tourCache } from '@/lib/cache';
import type { TourDetail } from '@/types/tour';

interface UseTourOptions {
  initialData?: TourDetail;
  cacheFirst?: boolean;
}

interface UseTourReturn {
  tour: TourDetail | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  clearCache: () => Promise<void>;
}

export function useTour(
  id: string,
  options: UseTourOptions = {}
): UseTourReturn {
  const { initialData, cacheFirst = true } = options;

  const [tour, setTour] = useState<TourDetail | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  // Fetch tour function
  const fetchTour = useCallback(
    async (useCache = cacheFirst) => {
      setLoading(true);
      setError(null);

      try {
        // Try cache first if enabled
        if (useCache) {
          const cachedTour = await tourCache.get(id);
          if (cachedTour) {
            setTour(cachedTour as TourDetail);
            setLoading(false);

            // Fetch fresh data in background
            setTimeout(() => {
              fetchTour(false).catch(console.error);
            }, 100);

            return;
          }
        }

        // Fetch from API
        const response = await fetch(`/api/tours/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch tour');
        }

        setTour(data.tour);

        // Cache the result
        await tourCache.set(data.tour);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMessage);
        console.error('Fetch tour error:', err);
      } finally {
        setLoading(false);
      }
    },
    [id, cacheFirst]
  );

  // Refetch function (always from API)
  const refetch = useCallback(() => {
    return fetchTour(false);
  }, [fetchTour]);

  // Clear cache for this tour
  const clearCache = useCallback(async () => {
    try {
      // Note: tourCache.get() doesn't have a delete method for single item
      // We would need to implement this in the cache class
      await tourCache.clear(); // For now, clear all cache
    } catch (error) {
      console.error('Clear cache error:', error);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    if (!initialData) {
      fetchTour();
    } else {
      // Cache the initial data
      tourCache.set(initialData);
    }
  }, [id, initialData, fetchTour]);

  return {
    tour,
    loading,
    error,
    refetch,
    clearCache,
  };
}
