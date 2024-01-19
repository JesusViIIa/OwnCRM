import { ITransaction } from "../../interfaces/ITransaction";
import Transaction from "../../models/Transaction";
import { updateCheckStatusAccount } from "../AccountServices/updateAccounts.service";

export const updateTransactionService = async (transaction:ITransaction, id: string) => {
    try {
        const transactionUpdated = await Transaction.findByIdAndUpdate(id, transaction).populate("account");
        if (transactionUpdated.account) {
            await updateCheckStatusAccount(transactionUpdated.account._id);
          }
        return transactionUpdated;
    } catch (error) {
        console.log(error);
    }
}