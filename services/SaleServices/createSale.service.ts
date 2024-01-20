import { eAccountStatus } from "../../interfaces/IAccount";
import { eProductTransactionType } from "../../interfaces/IProductTransaction";
import { ISale, eSaleStatus } from "../../interfaces/ISale";
import { eStatusTransaction } from "../../interfaces/ITransaction";
import Product from "../../models/Product";
import ProductTransaction from "../../models/ProductTransaction";
import Sale from "../../models/Sale";
import { createAccountService } from "../AccountServices/createAccounts.service";
import { createTransactionService } from "../TransactionService/createTransaction.service";

export const createSaleService = async (sale: ISale) => {
  try {
    // total and paid must be equal, if not, create an account
    // totalProducts must be equal to products.length
    // status must be Pending

    if (sale.products?.length === 0) {
      throw new Error("No products in sale");
    }
    const status =
      sale.total === sale.paid ? eSaleStatus.Paid : eSaleStatus.Debt;

    const newSale = new Sale({
      customer: sale.customer,
      products: sale.products,
      total: sale.total,
      paid: sale.paid,
      totalProducts: sale.products?.length,
      status,
    });

    if (status === eSaleStatus.Debt) {
      const debt = newSale.total - newSale.paid;
      if (debt > 0) {
        console.log("creating account", sale);
        const acc = await createAccountService({
          customer: sale.customer,
          currentDebt: debt,
          status: eAccountStatus.pending,
          description: `Venta #${newSale._id}, ${newSale.totalProducts} productos`,
          name: `Cuenta por cobrar #${newSale._id}`,
          sale: newSale._id,
          totalDebt: debt,
        });
        // @ts-ignore
        newSale.debt = acc._id;
        console.log("account created", acc);
        await newSale.save();
      }
    }

    //if paid greater than 0, create a transaction
    if (newSale.paid > 0) {
      createTransactionService({
        amount: newSale.paid,
        description: `Pago de venta #${newSale._id}`,
        //@ts-ignore
        sale: newSale._id,
        status: eStatusTransaction.completed,
        //@ts-ignore
        type: "65aab9cdc4389fce371552ad",
        concept: `Venta realizada #${newSale._id}`,
      });
    }

    // agregar transaccion de productos
    // agregar historial
    sale.products?.forEach(async (p) => {
      const h = await ProductTransaction.create({
        description: "Producto Vendido",
        type: eProductTransactionType.OUTCOME,
        quantity: -1,
        // @ts-ignore
        product: p,
      });
      await h.save();
      console.log(h);
      // update product quantity
      await Product.findByIdAndUpdate(p, {
        $inc: { quantity: -1 },
      });
    });

    const saleCreated = await newSale.save();

    return saleCreated;
  } catch (error) {
    throw new Error(error);
  }
};
