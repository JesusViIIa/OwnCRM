// la venta puede tener un cliente o no
// la venta tiene uno o varios productos
// la venta tiene un total pagado y una posible deuda
// la venta tiene un total de productos

import { IAccount } from "./IAccount";
import { ICustomer } from "./ICustomer";
import { IProduct } from "./IProduct";

// la venta tiene un status con un enum
export interface ISale {
    _id: string;
    customer: ICustomer;
    products: IProduct[];
    total: number;
    paid: number;
    debt: IAccount;
    totalProducts: number;
    status: eSaleStatus;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
}


export enum eSaleStatus {
    Apart = "Apartado",
    Pending = "Pendiente",
    Paid = "Pagado",
    Canceled = "Cancelado",
    Debt = "Deuda"
}