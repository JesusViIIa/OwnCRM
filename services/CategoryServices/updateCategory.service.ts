import Category from "../../models/Category";

export const updateCategoryService = async (id, category) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, category, {
      new: true,
    }).populate("categoryFather");
    return updatedCategory;
  } catch (error) {
    throw new Error(error);
  }
};
