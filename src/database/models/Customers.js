import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; 

class Customers extends Model {}

Customers.init({
    customerId: {
        type: DataTypes.STRING 
    },
    fullName:  {
        type: DataTypes.STRING 
    },
    email:  {
        type: DataTypes.STRING 
    },
    address:  {
        type: DataTypes.STRING 
    },
    userType:  {
        type: DataTypes.STRING 
    },
    registeredOn: {
        type: DataTypes.STRING
    }
}, { 
    sequelize,
    modelName: 'customers',
});


export default Customers;