import { IProduct } from "../../interfaces/IProduct";
import { eProductTransactionType } from "../../interfaces/IProductTransaction";
import Product from "../../models/Product";
import ProductTransaction from "../../models/ProductTransaction";

export const createProductService = async (product: IProduct) => {
  try {
    const productCreated = new Product({ ...product, active: true });
    await productCreated.populate({
      path: "category",
      populate: {
        path: "categoryFather",
        model: "Category",
      },
    });
    productCreated.save();


    // agregar historial
    const h = await ProductTransaction.create({
      description: "Producto Agregado",
      type: eProductTransactionType.CREATE,
      quantity: +product.quantity,
      product: productCreated._id,
    })
    await h.save();
    console.log(h)





    return productCreated;
  } catch (error) {
    console.log(error);
  }
};
