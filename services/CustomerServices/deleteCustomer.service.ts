
import Customer from "../../models/Customer";

export const deleteCustomerService = async (
  id: string
) => {
  try {
    const deletedCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        active: false,
      }
    );
    return deletedCustomer;
   
  } catch (error) {
    throw new Error(error);
  }
};
