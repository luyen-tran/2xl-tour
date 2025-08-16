import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getMockTours } from '@/lib/test-data';

// Validation schema for query parameters
const ToursQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(50).default(20),
  location: z.string().optional(),
  category: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = ToursQuerySchema.parse(Object.fromEntries(searchParams));

    // Use mock data instead of Supabase
    const mockResult = getMockTours({
      location: query.location,
      category: query.category,
      page: query.page,
      limit: query.limit,
      minPrice: query.minPrice,
      maxPrice: query.maxPrice,
    });

    // Simulate API delay for realistic testing
    await new Promise(resolve => setTimeout(resolve, 300));

    return NextResponse.json({
      tours: mockResult.tours,
      total: mockResult.total,
      page: mockResult.page,
      totalPages: mockResult.totalPages,
    });
  } catch (error) {
    console.error('API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid query parameters', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
