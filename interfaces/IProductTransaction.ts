import { IProduct } from "./IProduct";

 export interface IProductTransaction {
    id: string;
    description: string;
    type: IProductTransactionType;
    quantity: number;
    product: IProduct;
    createdAt: Date;
    updatedAt: Date;
 }


 enum IProductTransactionType {
    INCOME = 'Entrada',
    OUTCOME = 'Salida',
    CREATE = 'Creado',
 }