import Sale from "../../models/Sale";
import { deleteAccountService } from "../AccountServices/deleteAccount.service";

export const deleteSaleService = async (id: string) => {
  try {
    const sale = await Sale.findByIdAndUpdate(id, {
      active: false,
    });
    await deleteAccountService(sale._id);
    return sale;
  } catch (error) {
    throw new Error(error);
  }
};
