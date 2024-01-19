import Product from "../../models/Product";
import { IProduct } from "../../interfaces/IProduct";
import ProductTransaction from "../../models/ProductTransaction";

export const getProductByIdService = async (id): Promise<IProduct> => {

    try {
        const product = await Product.findById(id)
        .populate({
            path: "category",
            populate: {
                path: "categoryFather",
                model: "Category"
            }
        }).populate({
            path: "history",
            model: "ProductTransaction",
        });
        const history = await ProductTransaction.find({product: id});
        console.log(history);



        return {
            ...product.toJSON(),
            history
        };
    }
    catch (error) {
        throw new Error(error);
    }
}

