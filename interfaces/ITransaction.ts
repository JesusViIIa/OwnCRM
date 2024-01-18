import { ITypeTransaction } from "./ITypeTransaction";

export interface ITransaction {
    id: string;
    amount: number;
    concept: string;
    type: ITypeTransaction;
    createdAt: Date;
    updatedAt: Date;
    }