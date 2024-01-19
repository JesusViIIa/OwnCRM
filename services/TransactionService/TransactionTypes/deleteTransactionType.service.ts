import TypeTransaction from "../../../models/TypeTransaction";

export const deleteTransactionTypeService = async (id:string) => {
    try {
        const transaction = await TypeTransaction.findById(id);
        transaction.active = false;
        transaction.save();
        return transaction;
    } catch (error) {
        console.log(error);
    }
}