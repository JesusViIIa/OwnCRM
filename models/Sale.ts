import { Schema, model } from "mongoose";
import { ISale } from "../interfaces/ISale";
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
      required: true,
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
  },
  {
    timestamps: true,
  }
);


export default model<ISale>("Sale", saleSchema);