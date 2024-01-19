import { Schema, model } from "mongoose";
import { IAccount, eAccountStatus } from "../interfaces/IAccount";
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
    updatedAt: Date,
    sale: {
        type: Schema.Types.ObjectId,
        ref: "Sale"
    },
    active: {
        type: Boolean,
        default: true
    },
    status:{
        type: String,
        enum: eAccountStatus,
        default: eAccountStatus.pending
    
    }
}, {
    timestamps: true
})

export default model<IAccount>("Account", accountSchema);