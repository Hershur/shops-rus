import Discounts from '../database/models/Discounts';

export const createDiscountRepo = async (discountBody)=> {
    const discount = {
        type: discountBody.type,
        amount: discountBody.amount,
        percentage: discountBody.percentage
    };

    const saveDiscount = await Discounts.create(discount);

    return saveDiscount;
}


export const getDiscountsRepo = async ()=> {
    const discounts = await Discounts.findAll();

    return discounts;
}


export const getDiscountByTypeRepo = async(discountType)=> {
    const discount = await Discounts.findOne({ where: { type: discountType } });


    return discount?.percentage;
}