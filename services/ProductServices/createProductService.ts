import { IProduct } from "../../interfaces/IProduct";
import Product from "../../models/Product";

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
    return productCreated;
  } catch (error) {
    console.log(error);
  }
};
