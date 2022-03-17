export const uid = ()=> {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);

    return `${head}${tail}`;
}

export const responseSample = ({statusCode, success, message, data})=> {
    return {
        statusCode, 
        success,
        message,
        data
    };  
};


export const computeCustomerDiscountPercent = (userType, registeredOn, productType)=> {
    const customerHasSpent = howLongHasBeenACustomer(registeredOn);

    if(productType.toLowerCase() === 'groceries'){
        return 0;
    }

    if(userType.toLowerCase() === 'employee'){
        return 0.3;
    } else if(userType.toLowerCase() === 'affiliate'){
        return 0.1;
    } else if (customerHasSpent >= 2) {
        return 0.05;
    }

    return 0;
}


export const computeCustomerDiscountRate = (amount)=> {
    return Math.floor(+amount / 100) * 5;
}


const howLongHasBeenACustomer = (dateString)=> {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
}

export const getDiscountPercentByType = {
    employee: "30%",
    affiliate: "10%",
    spentTwoOrMoreYears: "5%"
};