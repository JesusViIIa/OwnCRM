import { ICustomer } from "../../interfaces/ICustomer";
import Customer from "../../models/Customer";

export const createCustomerService = async (customer: ICustomer) => {
    try {
        const newCustomer = await Customer.create({
            ...customer,
            active: true,
        });
        await newCustomer.save();
        return newCustomer;
    }
    catch (error) {
        throw new Error(error);
    }
}