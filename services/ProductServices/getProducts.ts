import Product from "../../models/Product";

export const getProductsService = async () => {
    try {
        // populate category and CategoryFather of category
        const products = await Product.find({
            active: true
        }).populate({
            path: "category",
            populate: {
                path: "categoryFather",
                model: "Category"
            }
        });
        return products;
    }
    catch (error) {
        throw new Error(error);
    }
}