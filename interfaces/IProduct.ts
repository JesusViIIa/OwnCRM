import { ICategory } from "./ICategory";
import { IProductTransaction } from "./IProductTransaction";

// costo al publico y costo de produccion
export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    priceCost: number;
    active: boolean;
    quantity: number;
    category: ICategory;
    history: IProductTransaction[];
    image: string;
    createdAt: Date;
    updatedAt: Date;
    }