import { Schema, model } from "mongoose";
import { ITypeTransaction } from "../interfaces/ITypeTransaction";
const typeTransactionSchema = new Schema<ITypeTransaction>({
    name: {
        type: String,
        required: true
    },
    expense: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
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

export default model<ITypeTransaction>("TypeTransaction", typeTransactionSchema);




