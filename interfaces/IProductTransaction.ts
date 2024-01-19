import { IProduct } from "./IProduct";

 export interface IProductTransaction {
    _id: string;
    description: string;
    type: eProductTransactionType;
    quantity: number;
    product: IProduct;
    createdAt: Date;
    updatedAt: Date;
 }


 export enum eProductTransactionType {
    INCOME = 'Entrada',
    OUTCOME = 'Salida',
    CREATE = 'Creado',
    CANCELED = 'Cancelado',
 }