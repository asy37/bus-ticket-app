import { NextResponse } from 'next/server';

import { cities } from '@/lib/api/mock-data/cities';

export async function GET() {
  return NextResponse.json(cities);
}
