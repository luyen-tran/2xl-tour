// Mock data for testing the implementation
import type { Tour } from '@/types/tour';

export const mockTours: Tour[] = [
  {
    id: '1',
    title: 'Ha Long Bay Cruise Adventure',
    description:
      'Experience the breathtaking beauty of Ha Long Bay with our luxury cruise. Visit stunning limestone karsts, hidden caves, and floating villages.',
    price: 2500000,
    duration: 2,
    location: 'Ha Long Bay',
    category: 'Adventure',
    images: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    ],
    rating: 4.8,
    available_slots: 12,
    status: 'active',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Sapa Trekking Experience',
    description:
      'Trek through the magnificent rice terraces of Sapa and experience the culture of ethnic minorities in northern Vietnam.',
    price: 1800000,
    duration: 3,
    location: 'Sapa',
    category: 'Mountain',
    images: [
      'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    ],
    rating: 4.6,
    available_slots: 8,
    status: 'active',
    created_at: '2024-01-14T10:00:00Z',
    updated_at: '2024-01-14T10:00:00Z',
  },
  {
    id: '3',
    title: 'Ho Chi Minh City Food Tour',
    description:
      'Discover the incredible street food scene of Ho Chi Minh City. Taste authentic Vietnamese dishes and learn about local food culture.',
    price: 800000,
    duration: 1,
    location: 'Ho Chi Minh City',
    category: 'Food',
    images: [
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    ],
    rating: 4.9,
    available_slots: 15,
    status: 'active',
    created_at: '2024-01-13T10:00:00Z',
    updated_at: '2024-01-13T10:00:00Z',
  },
  {
    id: '4',
    title: 'Hoi An Ancient Town Walking Tour',
    description:
      'Explore the UNESCO World Heritage site of Hoi An Ancient Town. Visit historic temples, traditional houses, and local markets.',
    price: 600000,
    duration: 1,
    location: 'Hoi An',
    category: 'Cultural',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=800&h=600&fit=crop',
    ],
    rating: 4.7,
    available_slots: 20,
    status: 'active',
    created_at: '2024-01-12T10:00:00Z',
    updated_at: '2024-01-12T10:00:00Z',
  },
  {
    id: '5',
    title: 'Phu Quoc Island Beach Relaxation',
    description:
      'Relax on the pristine beaches of Phu Quoc Island. Enjoy crystal clear waters, white sand beaches, and stunning sunsets.',
    price: 3200000,
    duration: 4,
    location: 'Phu Quoc',
    category: 'Beach',
    images: [
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop',
    ],
    rating: 4.5,
    available_slots: 3,
    status: 'active',
    created_at: '2024-01-11T10:00:00Z',
    updated_at: '2024-01-11T10:00:00Z',
  },
  {
    id: '6',
    title: 'Hanoi Historical City Tour',
    description:
      "Discover the rich history and culture of Vietnam's capital city. Visit the Old Quarter, temples, and historical landmarks.",
    price: 900000,
    duration: 1,
    location: 'Hanoi',
    category: 'Historical',
    images: [
      'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop',
    ],
    rating: 4.4,
    available_slots: 0,
    status: 'active',
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-10T10:00:00Z',
  },
];

// Helper function to get mock data for testing
export function getMockTours(
  filters: {
    location?: string;
    category?: string;
    page?: number;
    limit?: number;
    minPrice?: number;
    maxPrice?: number;
  } = {}
) {
  let filteredTours = [...mockTours];

  // Apply filters
  if (filters.location) {
    filteredTours = filteredTours.filter(tour =>
      tour.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  if (filters.category) {
    filteredTours = filteredTours.filter(
      tour => tour.category === filters.category
    );
  }

  // Apply price filters
  if (filters.minPrice !== undefined) {
    filteredTours = filteredTours.filter(
      tour => tour.price >= filters.minPrice!
    );
  }

  if (filters.maxPrice !== undefined) {
    filteredTours = filteredTours.filter(
      tour => tour.price <= filters.maxPrice!
    );
  }

  // Apply pagination
  const page = filters.page || 1;
  const limit = filters.limit || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTours = filteredTours.slice(startIndex, endIndex);

  return {
    tours: paginatedTours,
    total: filteredTours.length,
    page,
    totalPages: Math.ceil(filteredTours.length / limit),
  };
}

export function getMockTour(id: string) {
  return mockTours.find(tour => tour.id === id) || null;
}
