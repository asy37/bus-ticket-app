import { NextResponse } from 'next/server';

import trips from '@/lib/api/mock-data/trips';

export async function POST(request: Request) {
  debugger;
  const body = await request.json();
  const { from, to, departureDate } = body;

  if (!from || !to || !departureDate) {
    return NextResponse.json({ error: 'Eksik parametre' }, { status: 400 });
  }

  const filteredTrips = trips.filter(
    (trip) => trip.from.name === from && trip.to.name === to && trip.date === departureDate
  );

  return new Response(
    JSON.stringify({
      success: true,
      data: filteredTrips,
      message: 'Inquiry received successfully',
    })
  );
}
