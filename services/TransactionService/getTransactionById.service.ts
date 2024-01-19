import Transaction from "../../models/Transaction";

export const getTransactionByIdService = async (id: string) => {
  try {
    const transaction = await Transaction.findById(id)
      .populate("type")
      .populate("sale")
      .populate("account");
    return transaction;
  } catch (error) {
    console.log(error);
  }
};
