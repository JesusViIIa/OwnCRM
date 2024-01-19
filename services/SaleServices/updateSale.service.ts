import { eProductTransactionType } from "../../interfaces/IProductTransaction";
import { ISale, eSaleStatus } from "../../interfaces/ISale";
import ProductTransaction from "../../models/ProductTransaction";
import Sale from "../../models/Sale";
import { deleteAccountService } from "../AccountServices/deleteAccount.service";

export const updateSaleService = async (sale: ISale, id: string) => {
  try {

    const saleCreated = await Sale.findByIdAndUpdate(id, {
      ...sale,
    });
    // if status is canceled, update account status to canceled
    if (sale.status === eSaleStatus.Canceled) {
      await deleteAccountService(sale._id);



      await saleCreated.populate("products")
      // agregar historial
      saleCreated.products?.forEach(async (p) => {
      const h = await ProductTransaction.create({
        description: "Venta cancelada",
        type: eProductTransactionType.CANCELED,
        quantity: +1,
        // @ts-ignore
        product: p._id,
      });
      await h.save();
      console.log(h);
    });
    }
    return saleCreated;
  } catch (error) {
    throw new Error(error);
  }
};
