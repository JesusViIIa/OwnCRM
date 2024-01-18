// la venta puede tener un cliente o no
// la venta tiene uno o varios productos
// la venta tiene un total pagado y una posible deuda
// la venta tiene un total de productos

import { IAccount } from "./IAccount";
import { ICustomer } from "./ICustomer";
import { IProduct } from "./IProduct";

// la venta tiene un status con un enum
export interface ISale {
    id: string;
    customer: ICustomer;
    products: IProduct[];
    total: number;
    paid: number;
    debt: IAccount;
    totalProducts: number;
    status: SaleStatus;
    createdAt: Date;
    updatedAt: Date;
}


export enum SaleStatus {
    Apart = "Apartado",
    Pending = "Pendiente",
    Paid = "Pagado",
    Canceled = "Cancelado",
    Debt = "Deuda"
}