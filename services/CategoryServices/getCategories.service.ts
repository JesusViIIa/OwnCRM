import Category from "../../models/Category";

export const getCategoriesService = async () => {
    try {
        const categories = await Category.find({ active: true }).populate('categoryFather');
        return categories;
    }
    catch (error) {
        throw new Error(error);
    }
}