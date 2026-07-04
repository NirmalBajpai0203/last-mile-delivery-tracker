import mongoose, { Schema, model, models } from "mongoose";

const DeliverySchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },

    customerName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Out for Delivery",
        "Delivered",
      ],
      default: "Pending",
    },

    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Delivery ||
  model("Delivery", DeliverySchema);