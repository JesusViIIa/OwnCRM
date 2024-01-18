// product routes
import { Router } from 'express';
const router = Router();

import { ProductController } from '../controllers/product.controller';
const productController = new ProductController();

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;