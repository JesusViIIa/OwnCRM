import {eAccountStatus } from "../../interfaces/IAccount";
import { eStatusTransaction } from "../../interfaces/ITransaction";
import Account from "../../models/Account";
import Transaction from "../../models/Transaction";

export const updateCheckStatusAccount = async (id: string) => {
    try {

        // Traer la cuenta y sus transacciones, sumar las transacciones y actualizar el currentDebt
        // Si el currentDebt es 0, cambiar el status a pagado  
        const  transactions  = await Transaction.find({ account: id, active: true });
        let total = 0;
        transactions.forEach(transaction => {
            if(transaction.status === eStatusTransaction.completed){
                total += transaction.amount;
            }
        });

        const account = await Account.findById(id);

        const currentDebt = account.totalDebt - total;



        let status = eAccountStatus.pending;
        // si la dedua es igual a 0, o negativa, cambiar el status a pagado
        if(currentDebt <= 0){
            status = eAccountStatus.paid;
        }
        
        console.log("currentDebt", currentDebt);
        console.log("status", status);
        await Account.findByIdAndUpdate(id, { 
            currentDebt
            , status }); 

        return account;
        
    }
    catch (error) {
        throw new Error(error);
    }
};