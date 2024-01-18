import { createCategoryService } from "../services/CategoryServices.ts/createCategory.service";
import { deleteCategoryService } from "../services/CategoryServices.ts/deleteCategory.service";
import { getCategoriesService } from "../services/CategoryServices.ts/getCategories.service";
import { getCategoryByIdService } from "../services/CategoryServices.ts/getCategoryById.service";
import { updateCategoryService } from "../services/CategoryServices.ts/updateCategory.service";

export class CategoryController {
  constructor() {}

  async getCategories(req, res) {
    const categories = await getCategoriesService();
    return res.json(categories);
  }

  async getCategory(req, res) {
    const { id } = req.params;
    const category = await getCategoryByIdService(id);
    return res.json(category);
  }

  async createCategory(req, res) {
    const { body } = req;
    const category = await createCategoryService(body);
    return res.json(category);
  }

  async updateCategory(req, res) {
    const { id } = req.params;
    const { body } = req;
    const category = await updateCategoryService(id, body);
    return res.json(category);
  }

  async deleteCategory(req, res) {
    const { id } = req.params;
    const category = await deleteCategoryService(id);
    return res.json(category);
  }
}
