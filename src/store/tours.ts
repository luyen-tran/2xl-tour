import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { Tour, TourFilters, Pagination } from '@/types/tour';

// Core state atoms
export const toursAtom = atom<Tour[]>([]);
export const loadingAtom = atom<boolean>(false);
export const errorAtom = atom<string | null>(null);

// Filters with localStorage persistence
export const filtersAtom = atomWithStorage<TourFilters>('tour-filters', {
  location: '',
  category: '',
  priceRange: [0, 10000],
});

// Pagination state
export const paginationAtom = atom<Pagination>({
  page: 1,
  totalPages: 1,
  total: 0,
});

// Derived atom for filtered tours (client-side filtering)
export const filteredToursAtom = atom(get => {
  const tours = get(toursAtom);
  const filters = get(filtersAtom);

  return tours.filter(tour => {
    // Location filter
    if (
      filters.location &&
      !tour.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    // Category filter
    if (filters.category && tour.category !== filters.category) {
      return false;
    }

    // Price range filter
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange;
      if (tour.price < minPrice || tour.price > maxPrice) {
        return false;
      }
    }

    return true;
  });
});

// Action atom for fetching tours
export const fetchToursAtom = atom(
  null,
  async (get, set, params: Record<string, unknown> = {}) => {
    set(loadingAtom, true);
    set(errorAtom, null);

    try {
      const searchParams = new URLSearchParams();

      // Add pagination
      if (params.page) searchParams.set('page', params.page.toString());
      if (params.limit) searchParams.set('limit', params.limit.toString());

      // Add filters
      if (params.location && typeof params.location === 'string')
        searchParams.set('location', params.location);
      if (params.category && typeof params.category === 'string')
        searchParams.set('category', params.category);
      if (params.minPrice && typeof params.minPrice === 'number')
        searchParams.set('minPrice', params.minPrice.toString());
      if (params.maxPrice && typeof params.maxPrice === 'number')
        searchParams.set('maxPrice', params.maxPrice.toString());

      const response = await fetch(`/api/tours?${searchParams}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch tours');
      }

      set(toursAtom, data.tours);
      set(paginationAtom, {
        page: data.page,
        totalPages: data.totalPages,
        total: data.total,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      set(errorAtom, errorMessage);
      console.error('Fetch tours error:', error);
    } finally {
      set(loadingAtom, false);
    }
  }
);

// Action atom for updating filters
export const updateFiltersAtom = atom(
  null,
  (get, set, newFilters: Partial<TourFilters>) => {
    const currentFilters = get(filtersAtom);
    const updatedFilters = { ...currentFilters, ...newFilters };
    set(filtersAtom, updatedFilters);
  }
);

// Action atom for resetting filters
export const resetFiltersAtom = atom(null, (_get, set) => {
  set(filtersAtom, {
    location: '',
    category: '',
    priceRange: [0, 10000],
  });
});
