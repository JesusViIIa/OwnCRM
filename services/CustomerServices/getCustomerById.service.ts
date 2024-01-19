
import Customer from "../../models/Customer";

export const getCustomerByIdService = async (
  id: string
) => {
  try {
    const customer = await Customer.findById(id).populate({
      path: "accounts",
      populate: {
        path: "transactions",
      },
    }).populate({
      path: "purchases",
      populate: {
        path: "products",
      },
    });
    return customer;
  } catch (error) {
    throw new Error(error);
  }
};
