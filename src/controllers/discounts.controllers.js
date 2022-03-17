import { 
    createDiscountService, 
    getDiscountByTypeService, 
    getDiscountsService 
} from '../services/discounts.services';

export const createDiscount = async (req, res) =>{
    const discount = await createDiscountService(req.body);

    if(discount.success){
        return res.status(200).json(discount);
    } 

    return res.status(500).json(discount);
}

export const getDiscounts = async (req, res) =>{
    const discounts = await getDiscountsService();
    
    if(discounts.success){
        return res.status(200).json(discounts);
    }

    return res.status(500).json(discounts);
}



export const getDiscountByType = async (req, res) =>{
    const { type } = req.body;

    const discounts = await getDiscountByTypeService(type);
    
    if(discounts.success){
        return res.status(200).json(discounts);
    }

    return res.status(500).json(discounts);
}