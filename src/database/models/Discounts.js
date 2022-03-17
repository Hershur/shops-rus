import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; 

class Discounts extends Model {}

Discounts.init({
    type: {
        type: DataTypes.STRING 
    },
    percentage:  {
        type: DataTypes.NUMBER 
    },
    amount:  {
        type: DataTypes.NUMBER 
    }
}, { 
    sequelize,
    modelName: 'discounts',
});


export default Discounts;