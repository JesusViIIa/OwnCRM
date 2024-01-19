// product routes
import { Router } from 'express';
const router = Router();
import { TransactionTypesController } from '../controllers/transactionTypes.controller';
const transactionTypesController = new TransactionTypesController
router.get('/', transactionTypesController.getTransactionsType);
router.post('/', transactionTypesController.createTransactionType);
router.put('/:id', transactionTypesController.updateTransactionType);
router.delete('/:id', transactionTypesController.deleteTransactionType);









export default router;