import { Request, Response } from "express";
import { getTransactionsService } from "../services/TransactionService/getTransactions.service";
import { getTransactionByIdService } from "../services/TransactionService/getTransactionById.service";
import { createTransactionService } from "../services/TransactionService/createTransaction.service";
import { updateTransactionService } from "../services/TransactionService/updateTransaction.service";
import { deleteTransactionService } from '../services/TransactionService/deleteTransaction.service';

export class TransactionController {
    constructor() {}
    public async getTransactions(req: Request, res: Response) {
        const transactions = await getTransactionsService();
        res.json(transactions);
    }
    public async getTransaction(req: Request, res: Response) {
        const { id } = req.params;
       const transaction = await getTransactionByIdService(id);
         res.json(transaction);

    }
    public async createTransaction(req: Request, res: Response) {
        const { body } = req;
        const transaction = await createTransactionService(body);
        res.json(transaction);
    }
    public async updateTransaction(req: Request, res: Response) {
        const { id } = req.params;
        const { body } = req;
        const transaction = await updateTransactionService(body, id);
        res.json(transaction);
    }
    public async deleteTransaction(req: Request, res: Response) {
        const { id } = req.params;
        const transaction = await deleteTransactionService(id);
        res.json(transaction);
    }

}