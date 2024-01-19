import Transaction from "../../models/Transaction";

export const getTransactionsService = async () => {
    try {
        const transactions = await Transaction.find({active: true});
        return transactions;
    }
    catch (error) {
        console.log(error);
    }
};