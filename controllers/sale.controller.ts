import { Request, Response } from "express";
import { getSalesService } from "../services/SaleServices/getSales.service";
import { getSalebyIdService } from "../services/SaleServices/getSaleById.service";
import { createSaleService } from "../services/SaleServices/createSale.service";
import { updateSaleService } from "../services/SaleServices/updateSale.service";
import { deleteSaleService } from "../services/SaleServices/deleteSale.service";

export class SaleController {

    async getSales(req: Request, res: Response) {
        const sales = await getSalesService();
        res.json(sales);
    }
    async getSaleById(req: Request, res: Response) {
        const { id } = req.params;
        const sale = await getSalebyIdService(id);
        res.json(sale);
    }
    async createSale(req: Request, res: Response) {
        const { body } = req;
        const sale = await createSaleService(body);
        res.json(sale);
    }
    async updateSale(req: Request, res: Response) {
        const { id } = req.params;
        const { body } = req;
        const sale = await updateSaleService(body, id);
        res.json(sale);
    }
    async deleteSale(req: Request, res: Response) {
        const { id } = req.params;
        const sale = await deleteSaleService(id);
        res.json(sale);
    }

}