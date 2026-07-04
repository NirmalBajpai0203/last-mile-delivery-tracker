import { connectDB } from "@/lib/db";
import Driver from "@/models/Driver";

export async function GET() {
  try {
    await connectDB();

    const drivers = await Driver.find().sort({ createdAt: -1 });

    return Response.json(drivers);
  } catch {
    return Response.json(
      { message: "Error fetching drivers" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const driver = await Driver.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      vehicle: body.vehicle,
      status: body.status,
      latitude: body.latitude || 28.6139,
      longitude: body.longitude || 77.209,
    });

    return Response.json({
      success: true,
      driver,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      { success: false, message },
      { status: 500 }
    );
  }
}