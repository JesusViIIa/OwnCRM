import { ICustomer } from "./ICustomer";
import { ITransaction } from "./ITransaction";
// agregar deuda total y deuda actual
export interface IAccount {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    customer: ICustomer;
    totalDebt: number;
    currentDebt: number;
    transactions: ITransaction[];
}