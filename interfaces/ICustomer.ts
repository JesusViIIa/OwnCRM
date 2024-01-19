import { IAccount } from "./IAccount";
import { ISale } from "./ISale";

export  interface ICustomer {
    _id: string;
    name: string;
    lastName: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    accounts: IAccount[];
    purchases: ISale[];
    active: boolean;
    
}