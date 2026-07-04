import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Delivery from "@/models/Delivery";

export async function GET() {
  await connectDB();

  const orders = await Delivery.find()
    .populate("driver")
    .sort({ createdAt: -1 })
    .limit(10);

  return NextResponse.json(orders);
}