'use client';

import { useAtom } from 'jotai';
import { useEffect, useCallback } from 'react';
import {
  toursAtom,
  loadingAtom,
  errorAtom,
  fetchToursAtom,
  filtersAtom,
  paginationAtom,
  filteredToursAtom,
} from '@/store/tours';
import { tourCache } from '@/lib/cache';
import type { Tour } from '@/types/tour';

interface UseToursOptions {
  initialData?: Tour[];
  autoFetch?: boolean;
  cacheFirst?: boolean;
}

export function useTours(options: UseToursOptions = {}) {
  const { initialData, autoFetch = false, cacheFirst = true } = options;

  const [tours, setTours] = useAtom(toursAtom);
  const [loading] = useAtom(loadingAtom);
  const [error] = useAtom(errorAtom);
  const [filters] = useAtom(filtersAtom);
  const [pagination] = useAtom(paginationAtom);
  const [filteredTours] = useAtom(filteredToursAtom);
  const [, fetchTours] = useAtom(fetchToursAtom);

  // Initialize with server data
  useEffect(() => {
    if (initialData && tours.length === 0) {
      setTours(initialData);
      // Cache the initial data
      tourCache.setMany(initialData);
    }
  }, [initialData, tours.length, setTours]);

  // Auto fetch on mount if enabled
  useEffect(() => {
    if (autoFetch && tours.length === 0) {
      refetch();
    }
  }, [autoFetch]);

  // Smart fetch function with cache-first strategy
  const refetch = useCallback(
    async (params: Record<string, unknown> = {}) => {
      if (cacheFirst) {
        try {
          // Try cache first
          const cachedTours = await tourCache.getMany(params);

          if (cachedTours.length > 0) {
            setTours(cachedTours);

            // Fetch fresh data in background
            setTimeout(() => {
              fetchTours(params).then(() => {
                // Update cache with fresh data
                if (tours.length > 0) {
                  tourCache.setMany(tours);
                }
              });
            }, 100);

            return;
          }
        } catch (error) {
          console.error('Cache error, falling back to API:', error);
        }
      }

      // Fetch from API
      await fetchTours(params);
    },
    [cacheFirst, fetchTours, setTours]
  );

  // Fetch with current filters
  const refetchWithFilters = useCallback(() => {
    const params = {
      page: pagination.page,
      ...filters,
      minPrice: filters.priceRange?.[0],
      maxPrice: filters.priceRange?.[1],
    };

    return refetch(params);
  }, [refetch, filters, pagination.page]);

  // Load next page
  const loadNextPage = useCallback(() => {
    if (pagination.page < pagination.totalPages) {
      const params = {
        page: pagination.page + 1,
        ...filters,
        minPrice: filters.priceRange?.[0],
        maxPrice: filters.priceRange?.[1],
      };

      return refetch(params);
    }
  }, [refetch, filters, pagination]);

  // Clear cache
  const clearCache = useCallback(async () => {
    await tourCache.clear();
  }, []);

  return {
    // Data
    tours,
    filteredTours,
    loading,
    error,
    filters,
    pagination,

    // Actions
    refetch,
    refetchWithFilters,
    loadNextPage,
    clearCache,

    // Computed
    hasNextPage: pagination.page < pagination.totalPages,
    isEmpty: tours.length === 0 && !loading,
  };
}
