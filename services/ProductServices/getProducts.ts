import Product from "../../models/Product";

export const getProductsService = async (
    search: string | undefined
) => {
    try {
        // populate category and CategoryFather of category
        const products = await Product.find({
            active: true,
            name: { $regex: search || "", $options: "i" },
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