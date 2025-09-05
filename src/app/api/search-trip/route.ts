import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { from, to, departureDate } = await request.json();
  const data = { from, to, departureDate };
  return NextResponse.json({ success: true, data, message: 'Search successfully' });
}
