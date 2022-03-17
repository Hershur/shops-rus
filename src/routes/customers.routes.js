import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { createCustomer, getCustomerById, getCustomerByName, getCustomers } from '../controllers/customers.controllers';

const customersRouter = express.Router();

customersRouter.post('/', 
    celebrate({
        body: Joi.object({
            fullName: Joi.string()
                .required()
                .messages({
                    "string.empty": "Full Name is required.",
                }),
            email: Joi.string()
                .email()
                .lowercase()
                .trim()
                .required()
                .example("user@example.com")
                .messages({
                    "string.email": "Not a valid email address.",
                    "string.empty": "Email is required.",
                }),
            address: Joi.string()
                .required()
                .messages({
                    "string.empty": "Address is required.",
                }),
            userType: Joi.string()
                .required()
                .messages({
                    "string.empty": "User type is required.",
                }),
            registeredOn: Joi.string()
                .required()
                .messages({
                    "string.empty": "Registration date is required.",
                }),
            
        }),
    }),
    async (req, res) => await createCustomer(req, res)
)
.get('/', async (req, res) => await getCustomers(req, res))
.get('/:id', async (req, res) => getCustomerById(req, res))
.post('/findByName', 
    celebrate({
        body: Joi.object({
            fullName: Joi.string()
                .required()
                .messages({
                    "string.empty": "Full Name is required.",
                })
        }),
    }),
    async (req, res) => getCustomerByName(req, res)
)


export default customersRouter;