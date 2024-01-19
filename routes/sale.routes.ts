import { Router } from 'express';
const router = Router();

import { SaleController } from '../controllers/sale.controller';
const saleController = new SaleController();


router.get('/', saleController.getSales);
router.get('/:id', saleController.getSaleById);
router.post('/', saleController.createSale);
router.put('/:id', saleController.updateSale);
router.delete('/:id', saleController.deleteSale);



export default router;