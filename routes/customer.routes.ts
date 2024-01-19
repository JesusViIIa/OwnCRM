import { Router } from 'express';
const router = Router();

import { CustomerController } from '../controllers/customer.controller';

const customerController = new CustomerController();


router.get('/', customerController.getCustomers);
router.get('/:id', customerController.getCustomer);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);


export default router;