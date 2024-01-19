import { Schema, model } from "mongoose";
   
import { ICustomer } from "../interfaces/ICustomer";
const customerSchema = new Schema<ICustomer>({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    accounts: [{
        type: Schema.Types.ObjectId,
        ref: "Account"
    }],
    purchases: [{
        type: Schema.Types.ObjectId,
        ref: "Sale"
    }],
    lastName: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
}, {
    timestamps: true
})

export default model<ICustomer>("Customer", customerSchema);