import { getAccountsService } from "../services/AccountServices/getAccountById.service";
import { getAccountByIdService } from "../services/AccountServices/getAccounts.service";

export class AccountController {
    constructor() {}

    async getAccounts(req, res) {
       const accounts = await getAccountsService();
         return res.json(accounts);
    }
    async getAccount(req, res) {
        const { id } = req.params;
        const account = await getAccountByIdService(id);
        return res.json(account);
    }

}