export interface ITypeTransaction {
    _id: string;
    name: string;
    expense: boolean;
    description: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}