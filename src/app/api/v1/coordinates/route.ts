import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Olá, App Router!" });
}

export async function POST() {
  return NextResponse.json({ message: "Olá, App Router!" });
}
