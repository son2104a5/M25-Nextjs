import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
