import { Request, Response } from "express";
import { getTransactionsService } from "../services/TransactionService/getTransactions.service";
import { getTransactionByIdService } from "../services/TransactionService/getTransactionById.service";
import { createTransactionService } from "../services/TransactionService/createTransaction.service";
import { updateTransactionService } from "../services/TransactionService/updateTransaction.service";
import { deleteTransactionService } from "../services/TransactionService/deleteTransaction.service";

export class TransactionController {
  constructor() {}
  public async getTransactions(req: Request, res: Response) {
    try {
      const transactions = await getTransactionsService();
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  public async getTransaction(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const transaction = await getTransactionByIdService(id);
      res.json(transaction);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  public async createTransaction(req: Request, res: Response) {
    try {
      const { body } = req;
      const transaction = await createTransactionService(body);
      res.json(transaction);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  public async updateTransaction(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const transaction = await updateTransactionService(body, id);
      res.json(transaction);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  public async deleteTransaction(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const transaction = await deleteTransactionService(id);
      res.json(transaction);
    } catch (error) {
        console.log("error")
      res.status(500).json({ message: error.message });
    }
  }
}
