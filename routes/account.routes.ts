import { Router } from 'express';
const router = Router();

import { AccountController } from '../controllers/account.controller';
const accountController = new AccountController();

router.get('/', accountController.getAccounts);
router.get('/:id', accountController.getAccount);


export default router;