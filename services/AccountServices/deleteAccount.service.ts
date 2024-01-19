import { eStatusTransaction } from "../../interfaces/ITransaction";
import Account from "../../models/Account";
import Transaction from "../../models/Transaction";

export const deleteAccountService = async (id: string) => {
  try {
    const account = await Account.findByIdAndUpdate(id, {
      active: false,
    }).populate("transactions");
    // actualizar status de las transacciones a cancelado
    if (account) {
      const { transactions } = account;
      transactions.forEach(async (transaction) => {
        await Transaction.findByIdAndUpdate(transaction._id, {
          status: eStatusTransaction.cancelled,
        });
      });
    }
    return account;
  } catch (error) {
    throw new Error(error);
  }
};
