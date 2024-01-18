import { IProduct } from "../../interfaces/IProduct"
import Product from "../../models/Product";


export const updateProductService = (product:IProduct, id: string, ) => {

 try {
    const productToUpdate = Product.findByIdAndUpdate(id, product, {new: true, populate:{
        path: "category",
        populate: {
            path: "categoryFather",
            model: "Category"
        } 
    }});
    return productToUpdate;
 } catch (error) {
  console.log(error)
 }




}
