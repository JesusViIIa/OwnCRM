export interface ICategory {
    id: string;
    name: string;
    description: string;
    color : string;
    active: boolean;
    categoryFather: ICategory;
    createdAt: Date;
    updatedAt: Date;
}