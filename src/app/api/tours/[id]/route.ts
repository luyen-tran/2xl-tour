import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getMockTour } from '@/lib/test-data';

// Validation schema for tour ID (relaxed for mock data)
const TourIdSchema = z.string().min(1, 'Tour ID is required');

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params in Next.js 15
    const resolvedParams = await params;

    // Validate tour ID
    const tourId = TourIdSchema.parse(resolvedParams.id);

    // Use mock data instead of Supabase
    const tour = getMockTour(tourId);

    // Simulate API delay for realistic testing
    await new Promise(resolve => setTimeout(resolve, 200));

    if (!tour) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    return NextResponse.json({
      tour: tour,
    });
  } catch (error) {
    console.error('API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid tour ID' }, { status: 400 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
