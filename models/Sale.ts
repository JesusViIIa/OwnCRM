import { Schema, model } from "mongoose";
import { ISale, eSaleStatus } from "../interfaces/ISale";
const saleSchema = new Schema<ISale>(
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    paid: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: eSaleStatus,
      default: eSaleStatus.Pending,
    },
    totalProducts: {
      type: Number,
      required: true,
    },
    debt: {
      type: Schema.Types.ObjectId,
      ref: "Account",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: Date,
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


export default model<ISale>("Sale", saleSchema);