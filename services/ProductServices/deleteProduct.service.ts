import Product from "../../models/Product";

export const deleteProductService = async (id) => {
    try {
        const product = await Product.findByIdAndDelete(id);
        return product;
    }
    catch (error) {
        throw new Error(error);
    }
};