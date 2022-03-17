import { 
    computeCustomerDiscountPercent, 
    computeCustomerDiscountRate, 
    getDiscountPercentByType 
} from "../helpers/helpers";
import { getCustomerByIdRepo } from "../repositories/customers.repo";
import { getDiscountByTypeRepo } from "../repositories/discounts.repo";


export const getCutomerInvoiceService = async (customerId, invoiceBody)=> {

    try {
        const customer = await getCustomerByIdRepo(customerId);
        const discountPercent = await getDiscountByTypeRepo(customer.userType);

         console.log("invoice", customerId);
        
        if(!customer){
            return {
                statusCode: 200, 
                success: true,
                message: "Customer not found",
                data: {}
            };  
        }

        let calculateDiscountPercent;

        if(invoiceBody.productType.toLowerCase() === 'groceries'){
            calculateDiscountPercent = 0;
        } else {
            calculateDiscountPercent = discountPercent/100;
        }

        // const calculateDiscountPercent = computeCustomerDiscountPercent(customer.userType, customer.registeredOn, invoiceBody.productType);
        // const calculateDiscountPercent = computeCustomerDiscountPercent(customer.userType, customer.registeredOn, invoiceBody.productType);
        const calculateDiscountRate = computeCustomerDiscountRate(invoiceBody.amount);
    
        const discount =  ((discountPercent/100) * invoiceBody.amount) + calculateDiscountRate;
        // const discountPercent = getDiscountPercentByType[customer.userType.toLowerCase()];

        return {
            statusCode: 200, 
            success: true,
            message: "Invoice returned successfully",
            data: {
                customerType: customer.userType,
                productType: invoiceBody.productType,
                totalAmount: invoiceBody.amount,
                discountPercent: `${discountPercent}%`,
                discountRate: calculateDiscountRate,
                discountedAmount: calculateDiscountPercent * invoiceBody.amount,
                totalDiscountedAmount: discount,
                finalAmount: invoiceBody.amount - discount
            }
        };  
        
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500, 
            success: false,
            error: "Failed to return invoice", 
            data: {}
        }
    }
}