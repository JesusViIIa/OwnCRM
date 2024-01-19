import { ITypeTransaction } from "../../../interfaces/ITypeTransaction";
import TypeTransaction from "../../../models/TypeTransaction";
export const updateTransactionTypeService = async (
  transaction: ITypeTransaction,
  id: string
) => {
  try {
    const transactionUpdated = await TypeTransaction.findByIdAndUpdate(
      id,
      transaction
    );
    return transactionUpdated;
  } catch (error) {
    console.log(error);
  }
};
