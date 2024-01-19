import { ICustomer } from "./ICustomer";
import { ISale } from "./ISale";
import { ITransaction } from "./ITransaction";
// agregar deuda total y deuda actual
export interface IAccount {
    _id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    customer: ICustomer;
    totalDebt: number;
    currentDebt: number;
    transactions: ITransaction[];
    status: eAccountStatus;
    sale: ISale;
    active: boolean;
}

export enum eAccountStatus {
    paid = "Pagado",
    pending = "Pendiente",
    partial = "Parcial",
    canceled = "Cancelado"
}