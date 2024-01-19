import {eAccountStatus } from "../../interfaces/IAccount";
import Account from "../../models/Account";

export const createAccountService = async (account) => {
    try {
        const newAccount = await Account.create({
            ...account,
            active: true,
            currentDebt: account.totalDebt,
            status: eAccountStatus.pending 
        });
        return newAccount;
        
    }
    catch (error) {
        throw new Error(error);
    }
};