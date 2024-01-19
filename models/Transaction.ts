import { Schema, model } from "mongoose";
import { ITransaction, eStatusTransaction } from "../interfaces/ITransaction";
const transactionSchema = new Schema<ITransaction>({
    amount: {
        type: Number,
        required: true
    },
    concept: {
        type: String,
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: "TypeTransaction",
        required: true
    },
    status: {
        type: String,
        enum: eStatusTransaction,
        default: eStatusTransaction.pending
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
    active: {
        type: Boolean,
        default: true
    },
    sale: {
        type: Schema.Types.ObjectId,
        ref: "Sale"
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: "Account"
    },
}, {
    timestamps: true
})

export default model<ITransaction>("Transaction", transactionSchema);


