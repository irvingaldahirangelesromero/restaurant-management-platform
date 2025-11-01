import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // lógica
  return NextResponse.json({ success: true });
}
