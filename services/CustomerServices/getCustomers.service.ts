
import Customer from "../../models/Customer";

export const getCustomersService = async (
) => {
  try {
    const customers = await Customer.find({ active: true });
    return customers;
  } catch (error) {
    throw new Error(error);
  }
};
