import { 
    createCustomerRepo, 
    getCustomerByIdRepo, 
    getCustomerByNameRepo, 
    getCustomersRepo 
} from "../repositories/customers.repo"

export const createCustomerService = async (customerBody)=> {
    try {
        const customer = await createCustomerRepo(customerBody);
        
        return {
            statusCode: 200, 
            success: true,
            message: "Customer created successfully",
            data: customer
        };    
    } catch (error) {
        return {
            statusCode: 500, 
            success: false,
            error: "Failed to create customer", 
            data: {}
        };    
    }

};

export const getCustomersService = async ()=> {
    try {
        const customer = await getCustomersRepo();
        
        return {
            statusCode: 200, 
            success: true,
            message: "Customers fetched successfully",
            data: customer
        };    
    } catch (error) {
        return {
            statusCode: 500, 
            success: false,
            error: "Failed to fetch customers", 
            data: {}
        };    
    }

};

export const getCustomerByIdService = async (customerId)=> {
    try {
        const customer = await getCustomerByIdRepo(customerId);
        
        return {
            statusCode: 200, 
            success: true,
            message: "Customer fetched successfully",
            data: customer
        };    
    } catch (error) {
        return {
            statusCode: 500, 
            success: false,
            error: "Failed to fetch customer", 
            data: {}
        };    
    }

};

export const getCustomerByNameService = async (customerName)=> {
    try {
        const customer = await getCustomerByNameRepo(customerName);
        
        return {
            statusCode: 200, 
            success: true,
            message: "Customer fetched successfully",
            data: customer
        };    
    } catch (error) {
        return {
            statusCode: 500, 
            success: false,
            error: "Failed to fetch customer", 
            data: {}
        };    
    }

};