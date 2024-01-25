import { eProductTransactionType } from "../../interfaces/IProductTransaction";
import Product from "../../models/Product";
import ProductTransaction from "../../models/ProductTransaction";
import Sale from "../../models/Sale";
import { deleteAccountService } from "../AccountServices/deleteAccount.service";

export const deleteSaleService = async (id: string) => {
  try {
    const sale = await Sale.findByIdAndUpdate(id, {
      active: false,
    });
    await deleteAccountService(sale._id);


    await sale.populate("products");
      // agregar historial
      sale.products?.forEach(async (p) => {
        const h = await ProductTransaction.create({
          description: "Venta cancelada",
          type: eProductTransactionType.CANCELED,
          quantity: +1,
          // @ts-ignore
          product: p._id,
        });
        await h.save();
        console.log(h);
        // update product quantity add
        await Product.findByIdAndUpdate(p, {
          $inc: { quantity: +1 },
        });
      });
    return sale;
  } catch (error) {
    throw new Error(error);
  }
};
