import { Schema, model } from "mongoose";
import { ICategory } from "../interfaces/ICategory";
const categorySchema = new Schema<ICategory>({
    name: String,
    description: String,
    color: String,
    active: Boolean,
    categoryFather: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    createdAt: Date,
    updatedAt: Date,
    });
export default model<ICategory>("Category", categorySchema);