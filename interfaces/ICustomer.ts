import { IAccount } from "./IAccount";

export  interface ICustomer {
    id: string;
    name: string;
    lastName: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    accounts: IAccount[];
}