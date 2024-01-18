import { Response } from "express";
import { getProductsService } from '../services/ProductServices/getProducts';
import { getProductByIdService } from "../services/ProductServices/getProductbyId";
import { createProductService } from "../services/ProductServices";
import { updateProductService } from "../services/ProductServices/updateProduct.service";
import { deleteProductService } from "../services/ProductServices/deleteProduct.service";

export class ProductController {
  constructor() {}

  async getProducts(req, res: Response) {
    const products = await getProductsService();
    return res.json(products);
  }

  async getProduct(req, res) {
    const { id } = req.params;
    const product = await getProductByIdService(id);
    return res.json(product);
  }

  async createProduct(req, res) {
    const { body } = req;
    const product =await createProductService(body);
    return res.json(product);
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const { body } = req;
    const product = await updateProductService(body, id);
    res.json(product);
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    const product = await deleteProductService(id);
    return res.json(product);
  }
}
