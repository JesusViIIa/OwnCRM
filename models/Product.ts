// modelos para mongoDB
import { Schema, model } from "mongoose";
import { IProduct } from "../interfaces/IProduct";
const productSchema = new Schema<IProduct>({
  name: String,
  price: Number,
  image: String,
  description: String,
  active: Boolean,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  createdAt: Date,
  priceCost: Number,
  quantity: Number,
  updatedAt: Date,
});

export default model<IProduct>("Product", productSchema);
