import Product from "../../models/Product";
import { IProduct } from "../../interfaces/IProduct";

export const getProductByIdService = async (id): Promise<IProduct> => {

    try {
        // populate category and CategoryFather of category
        const product = await Product.findById(id).populate({
            path: "category",
            populate: {
                path: "categoryFather",
                model: "Category"
            }
        });
        return product;
    }
    catch (error) {
        throw new Error(error);
    }
}

