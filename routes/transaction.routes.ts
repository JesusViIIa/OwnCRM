// product routes
import { Router } from 'express';
const router = Router();

import { TransactionController } from '../controllers/transaction.controller';
const transactionController = new TransactionController()

router.get('/', transactionController.getTransactions);
router.get('/:id', transactionController.getTransaction);
router.post('/', transactionController.createTransaction);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);







export default router;