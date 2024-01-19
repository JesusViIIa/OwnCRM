import { createCustomerService } from "../services/CustomerServices/createCustomer.service";
import { deleteCustomerService } from "../services/CustomerServices/deleteCustomer.service";
import { getCustomerByIdService } from "../services/CustomerServices/getCustomerById.service";
import { getCustomersService } from "../services/CustomerServices/getCustomers.service";
import { updateCustomerService } from "../services/CustomerServices/updateCustomer.service";

export class CustomerController {
    constructor() {
    }
    async getCustomers(req, res) {
        try {
            const customers = await getCustomersService();
            res.status(200).json(customers);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getCustomer(req, res) {
        try {
            const { id } = req.params;
            const customer = await getCustomerByIdService(id);
            res.status(200).json(customer);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createCustomer(req, res) {
        try {
            const newCustomer = await createCustomerService(req.body);
            res.status(200).json(newCustomer);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateCustomer(req, res) {
        try {
            const { id } = req.params;
            const { body } = req;
            const updatedCustomer = await updateCustomerService(body, id);
            res.status(200).json(updatedCustomer);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteCustomer(req, res) {
        try {
            const { id } = req.params;
            const deletedCustomer = await deleteCustomerService(id);
            res.status(200).json(deletedCustomer);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}             