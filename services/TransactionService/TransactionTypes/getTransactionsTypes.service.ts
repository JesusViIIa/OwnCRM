import TypeTransaction from "../../../models/TypeTransaction";

export const getTransactionsTypesService = async () => {
    try {
        const transactions = await TypeTransaction.find({ active: true });
        return transactions;
    }
    catch (error) {
        console.log(error);
    }
};