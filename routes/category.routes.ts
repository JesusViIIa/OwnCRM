// product routes
import { Router } from 'express';
const router = Router();

import { CategoryController } from '../controllers/category.controller';
const categoryController = new CategoryController();

router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);



export default router;