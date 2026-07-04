import { NextResponse } from "next/server";
import {connectDB} from "@/lib/db";

import Driver from "@/models/Driver";
import Order from "@/models/Order";

export async function GET() {
  try {
    await connectDB();

    const totalDrivers = await Driver.countDocuments();

    const activeDrivers = await Driver.countDocuments({
      status: "Available",
    });

    const totalDeliveries = await Order.countDocuments();

    const delivered = await Order.countDocuments({
      status: "Delivered",
    });

    return NextResponse.json({
      totalDrivers,
      activeDrivers,
      totalDeliveries,
      delivered,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch stats",
      },
      {
        status: 500,
      }
    );
  }
}