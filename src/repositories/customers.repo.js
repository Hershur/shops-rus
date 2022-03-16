import { uid } from '../helpers/helpers';
import Customers from '../database/models/Customers';

export const createCustomerRepo = async (customerBody)=> {
    const customer = {
        customerId: uid(),
        fullName: customerBody.fullName,
        email: customerBody.email,
        address: customerBody.address
    };

    const saveCustomer = await Customers.create(customer);

    return saveCustomer;
}


export const getCustomersRepo = async ()=> {
    const customers = await Customers.findAll();

    return customers;
}


export const getCustomerByIdRepo = async(customerId)=> {
    const customer = await Customers.findOne({ where: { customerId: customerId } });

    return customer;
}


export const getCustomerByNameRepo = async(customerName)=> {
    const customer = await Customers.findAll({ where: { fullName: customerName } });

    return customer;
}