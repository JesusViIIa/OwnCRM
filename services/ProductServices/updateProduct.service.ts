import { IProduct } from "../../interfaces/IProduct";
import { eProductTransactionType } from "../../interfaces/IProductTransaction";
import Product from "../../models/Product";
import ProductTransaction from "../../models/ProductTransaction";

export const updateProductService = async (product: IProduct, id: string) => {
  try {
    const productToUpdate = await Product.findByIdAndUpdate(id, product);
    // validar si el onventario cambió
    // agregar historial
    const diff = productToUpdate.quantity - product.quantity;
    if (diff !== 0) {
      const h = await ProductTransaction.create({
        description: "Inventario Actualizado",
        type: diff > 0 ? eProductTransactionType.OUTCOME : eProductTransactionType.INCOME,
        quantity: diff,
        product: productToUpdate._id,
      });
      await h.save();
    }

    const productUpdated = await Product.findById(productToUpdate._id).populate(
      {
        path: "category",
        populate: {
          path: "categoryFather",
          model: "Category",
        },
      }
    );

    return productUpdated;
  } catch (error) {
    console.log(error);
  }
};
