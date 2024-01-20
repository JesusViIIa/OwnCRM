import Transaction from "../../models/Transaction";
import { updateCheckStatusAccount } from "../AccountServices/updateAccounts.service";

export const deleteTransactionService = async (id:string) => {
    try {
        const transaction = await Transaction.findById(id);
        transaction.active = false;



        if(transaction.account){
            //@ts-ignore
            await updateCheckStatusAccount(transaction.account);
        }
        transaction.save();
        return transaction;
    } catch (error) {
        console.log("errorrrrrrrrrrr")
        console.log(error);
    }
}