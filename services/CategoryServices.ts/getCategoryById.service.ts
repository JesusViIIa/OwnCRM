import Category from "../../models/Category";

export const getCategoryByIdService = async (id) => {
    try {
        const category = await Category.findById(id).populate('categoryFather');
        return category;
    }
    catch (error) {
        throw new Error(error);
    }
}