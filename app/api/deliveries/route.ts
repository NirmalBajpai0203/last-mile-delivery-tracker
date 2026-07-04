import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";

import Delivery from "@/models/Delivery";

export async function GET() {
  await connectDB();

  const deliveries = await Delivery.find().populate("driver");

  return NextResponse.json(deliveries);
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const delivery = await Delivery.create(body);

  return NextResponse.json(delivery);
}