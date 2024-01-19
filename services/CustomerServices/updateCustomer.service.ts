import { ICustomer } from "../../interfaces/ICustomer";
import Customer from "../../models/Customer";

export const updateCustomerService = async (
  customer: ICustomer,
  id: string
) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        ...customer,
      },
      { new: true }
    );
    return updatedCustomer;
  } catch (error) {
    throw new Error(error);
  }
};
