// routes index
import { Router } from "express";
import productRoutes from "./product.routes";
import categoryRoutes from "./category.routes";
import transactionRoutes from "./transaction.routes";
import transactionTypeRoutes from "./transactionTypes.routes";
import customerRoutes from "./customer.routes";
import saleRoutes from "./sale.routes";
import accountRoutes from "./account.routes";

const router = Router();

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/transaction", transactionRoutes);
router.use("/transaction-types", transactionTypeRoutes);
router.use("/customer", customerRoutes);
router.use("/sale", saleRoutes);
router.use("/account", accountRoutes);

export default router;
