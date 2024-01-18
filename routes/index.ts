// routes index
import { Router } from 'express';
const router = Router();


/* Product Routes */
import productRoutes from './product.routes';
import categoryRoutes from './category.routes';
router.use('/product', productRoutes);
router.use('/category', categoryRoutes);




export default router;