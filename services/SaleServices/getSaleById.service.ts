import Sale from "../../models/Sale";

export const getSalebyIdService = async (id:string) => {
    try {
        const sales = await Sale.findById(id).populate('customer').populate("debt").populate("products");
        return sales;
    }
    catch (error) {
        throw new Error(error);
    }
}