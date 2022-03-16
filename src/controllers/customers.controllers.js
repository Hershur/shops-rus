import { 
    createCustomerService, 
    getCustomerByIdService, 
    getCustomerByNameService, 
    getCustomersService 
} from '../services/customers.services';

export const createCustomer = async (req, res) =>{
    const customer = await createCustomerService(req.body);

    if(customer.success){
        return res.status(200).json(customer);
    } 

    return res.status(500).json(customer);
}

export const getCustomers = async (req, res) =>{
    const customers = await getCustomersService();
    
    if(customers.success){
        return res.status(200).json(customers);
    }

    return res.status(500).json(customers);
}


export const getCustomerById = async (req, res) =>{
    const { id } = req.params;

    const customers = await getCustomerByIdService(id);
    
    if(customers.success){
        return res.status(200).json(customers);
    }

    return res.status(500).json(customers);
}

export const getCustomerByName = async (req, res) =>{
    const { fullName } = req.body;

    const customers = await getCustomerByNameService(fullName);
    
    if(customers.success){
        return res.status(200).json(customers);
    }

    return res.status(500).json(customers);
}