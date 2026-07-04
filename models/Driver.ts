import { Schema, model, models } from "mongoose";

const DriverSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    vehicle: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Available", "Busy", "Offline"],
      default: "Available",
    },

    latitude: {
      type: Number,
      default: 28.6139,
    },

    longitude: {
      type: Number,
      default: 77.209,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Driver || model("Driver", DriverSchema);