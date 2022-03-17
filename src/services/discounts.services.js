import { 
    createDiscountRepo, 
    getDiscountByTypeRepo, 
    getDiscountsRepo
} from "../repositories/discounts.repo"

export const createDiscountService = async (discountBody)=> {
    try {
        const discount = await createDiscountRepo(discountBody);
        
        return {
            statusCode: 200, 
            success: true,
            message: "Discount created successfully",
            data: discount
        };    
    } catch (error) {
        return {
            statusCode: 500, 
            success: false,
            error: "Failed to create discount", 
            data: {}
        };    
    }

};

export const getDiscountsService = async ()=> {
    try {
        const discount = await getDiscountsRepo();
        
        return {
            statusCode: 200, 
            success: true,
            message: "Discounts fetched successfully",
            data: discount
        };    
    } catch (error) {
        return {
            statusCode: 500, 
            success: false,
            error: "Failed to fetch discounts", 
            data: {}
        };    
    }

};


export const getDiscountByTypeService = async (discounType)=> {
    try {
        const discount = await getDiscountByTypeRepo(discounType);
        
        return {
            statusCode: 200, 
            success: true,
            message: "Discount fetched successfully",
            data: discount
        };    
    } catch (error) {
        return {
            statusCode: 500, 
            success: false,
            error: "Failed to fetch discount", 
            data: {}
        };    
    }

};