import Category from "../../models/Category";

export const deleteCategoryService = async (id) => {
    try {
        const deletedCategory = await Category.findByIdAndUpdate(id, { active: false }, { new: true });
        return deletedCategory;
    }
    catch (error) {
        throw new Error(error);
    }
}