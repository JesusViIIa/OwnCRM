import Sale from "../../models/Sale";

export const getSalesService = async () => {
    try {
        const sales = await Sale.find({ active: true })
        return sales;
    }
    catch (error) {
        throw new Error(error);
    }
}