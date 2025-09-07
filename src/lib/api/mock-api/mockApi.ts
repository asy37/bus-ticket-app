import { NextResponse } from 'next/server';

async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, data: body });
}

async function GET() {
  const mockData = { message: 'This is a mock GET response' };
  return NextResponse.json(mockData);
}

async function PUT(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, updatedData: body });
}

async function DELETE(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, deletedData: body });
}

export const mockApi = {
  POST,
  GET,
  PUT,
  DELETE,
};
