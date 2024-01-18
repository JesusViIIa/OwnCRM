import { Schema, model } from "mongoose";
import { ITransaction } from "../interfaces/ITransaction";
const transactionSchema = new Schema<ITransaction>({
    amount: {
        type: Number,
        required: true
    },
    concept: {
        type: String,
        required: true
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: "TypeTransaction",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
}, {
    timestamps: true
})

export default model<ITransaction>("Transaction", transactionSchema);


