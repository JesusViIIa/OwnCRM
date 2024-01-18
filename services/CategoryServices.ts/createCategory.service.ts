import Category from "../../models/Category";

export const createCategoryService = async (category) => {
    try {
        const newCategory = await Category.create({
            ...category,
            active: true,
        });
        await newCategory.save();
        return newCategory;
    }
    catch (error) {
        throw new Error(error);
    }
}