import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Structured logs make downstream filtering/aggregation easy in any log stack.
    console.info('[web-vitals]', JSON.stringify(payload));

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[web-vitals] invalid payload', error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
