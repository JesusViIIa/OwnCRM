import Account from "../../models/Account";

export const getAccountByIdService = async (id: string) => {
  try {
    // populate transactions, customer, sale
    const account = await Account.findById(id)
      .populate("transactions")
      .populate("customer")
      .populate("sale");

    return account;
  } catch (error) {
    throw new Error(error);
  }
};
