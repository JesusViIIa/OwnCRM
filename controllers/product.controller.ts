import { Response } from "express";
import { getProductsService } from '../services/ProductServices/getProducts';
import { getProductByIdService } from "../services/ProductServices/getProductbyId";
import { createProductService } from "../services/ProductServices";
import { updateProductService } from "../services/ProductServices/updateProduct.service";
import { deleteProductService } from "../services/ProductServices/deleteProduct.service";

export class ProductController {
  constructor() {}

  async getProducts(req, res: Response) {
    try {
      const {search} = req.query;
      const products = await getProductsService(search);
    return res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProduct(req, res) {
    try {
      const { id } = req.params;
    const product = await getProductByIdService(id);
    return res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const { body } = req;
    const product =await createProductService(body);
    return res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
    const { body } = req;
    const product = await updateProductService(body, id);
    res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    const product = await deleteProductService(id);
    return res.json(product);
  }
}
