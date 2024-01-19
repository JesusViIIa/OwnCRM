import { IAccount } from "./IAccount";
import { ISale } from "./ISale";
import { ITypeTransaction } from "./ITypeTransaction";

export interface ITransaction {
    _id: string;
    amount: number;
    concept: string;
    type: ITypeTransaction;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    status: string;
    sale: ISale;
    account: IAccount;
    }

    export enum eStatusTransaction {
        pending = "pending",
        completed = "completed",
        cancelled = "cancelled"
    }