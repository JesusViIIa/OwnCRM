// modelos para mongoDB
import { Schema, model } from "mongoose";
import { IProductTransaction, eProductTransactionType } from "../interfaces/IProductTransaction";
const productTransactionSchema = new Schema<IProductTransaction>({
  description: String,
  quantity: Number,
  type: {
    type: String,
    enum: eProductTransactionType,
    default: eProductTransactionType.CREATE,
  },
  createdAt: {
    type: Date,
    default: Date.now
},
  updatedAt: Date,
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

export default model<IProductTransaction>(
  "ProductTransaction",
  productTransactionSchema
);
