import Account from "../../models/Account";

export const getAccountsService = async () => {
    try {
        const accounts = await Account.find({
            active: true,
        })
        return accounts;
    }
    catch (error) {
        throw new Error(error);
    }
};