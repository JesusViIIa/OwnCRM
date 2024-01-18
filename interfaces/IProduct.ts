import { ICategory } from "./ICategory";

// costo al publico y costo de produccion
export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    priceCost: number;
    active: boolean;
    quantity: number;
    category: ICategory;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    }