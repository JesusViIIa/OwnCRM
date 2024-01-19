import { Request, Response } from "express";
import { getTransactionsTypesService } from "../services/TransactionService/TransactionTypes/getTransactionsTypes.service";
import { createTransactionTypeService } from "../services/TransactionService/TransactionTypes/createTransactionType.service";
import { updateTransactionTypeService } from "../services/TransactionService/TransactionTypes/updateTransactionType.service";
import { deleteTransactionTypeService } from "../services/TransactionService/TransactionTypes/deleteTransactionType.service";

export class TransactionTypesController {
    constructor() {}
    public async getTransactionsType(req: Request, res: Response) {
        const transactions = await getTransactionsTypesService();
        res.json(transactions);
    }
    public async createTransactionType(req: Request, res: Response) {
        const { body } = req;
        const transaction = await createTransactionTypeService(body);
        res.json(transaction);
    }
    public async updateTransactionType(req: Request, res: Response) {
        const { id } = req.params;
        const { body } = req;
        const transaction = await updateTransactionTypeService(body, id);
        res.json(transaction);
    }
    public async deleteTransactionType(req: Request, res: Response) {
        const { id } = req.params;
        const transaction = await deleteTransactionTypeService(id);
        res.json(transaction);
    }

}