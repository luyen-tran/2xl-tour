// Core Tour types
export interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number; // in days
  location: string;
  category: string;
  images: string[];
  rating: number;
  available_slots: number;
  status: 'active' | 'inactive' | 'draft';
  created_at: string;
  updated_at: string;
}

// Tour with additional details (for detail page)
export interface TourDetail extends Tour {
  tour_images?: TourImage[];
  reviews?: TourReview[];
}

export interface TourImage {
  id: string;
  tour_id: string;
  image_url: string;
  alt_text?: string;
  order: number;
}

export interface TourReview {
  id: string;
  tour_id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

// API Response types
export interface ToursResponse {
  tours: Tour[];
  total: number;
  page: number;
  totalPages: number;
}

export interface TourResponse {
  tour: TourDetail;
}

// Filter and pagination types
export interface TourFilters {
  location?: string;
  category?: string;
  priceRange?: [number, number];
  rating?: number;
}

export interface Pagination {
  page: number;
  totalPages: number;
  total: number;
}

// Cache types
export interface CachedTour extends Tour {
  cached_at: number;
}
