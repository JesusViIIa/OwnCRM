import { Schema, model } from "mongoose";
import { IAccount } from "../interfaces/IAccount";
const accountSchema = new Schema<IAccount>({
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: "Transaction"
    }],
    currentDebt: {
        type: Number,
        required: true
    },
    totalDebt: {
        type: Number,
        required: true
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    description: String,
    name: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
}, {
    timestamps: true
})

export default model<IAccount>("Account", accountSchema);