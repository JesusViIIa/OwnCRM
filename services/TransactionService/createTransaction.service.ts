import { ITransaction } from "../../interfaces/ITransaction";
import Transaction from "../../models/Transaction";
import { updateCheckStatusAccount } from "../AccountServices/updateAccounts.service";

export const createTransactionService = async (transaction: ITransaction) => {
  try {
    const transactionCreated = new Transaction({
      ...transaction,
      active: true,
    });
    (await transactionCreated.populate("type")).populate("account");
    transactionCreated.save();
    if (transactionCreated.account) {
      await updateCheckStatusAccount(transactionCreated.account._id);
    }
    return transactionCreated;
  } catch (error) {
    console.log(error);
  }
};
