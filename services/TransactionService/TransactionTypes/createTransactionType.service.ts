import { ITypeTransaction } from "../../../interfaces/ITypeTransaction";
import TypeTransaction from "../../../models/TypeTransaction";

export const createTransactionTypeService = async (transaction:ITypeTransaction) => {
    try {
        const transactionCreated = new TypeTransaction({ ...transaction, active: true });
        transactionCreated.save();
        return transactionCreated;
        
    } catch (error) {
        console.log(error);
    }
}