import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { getCutomerInvoice } from '../controllers/invoice.controller';

const invoiceRouter = express.Router();

invoiceRouter.post('/:id', 
    celebrate({
        body: Joi.object({
            amount: Joi.number()
                .required()
                .messages({
                    "string.number": "Amount should be a number",
                    "string.empty": "Amount is required.",
                }),
            productType: Joi.string()
                .required()
                .messages({
                    "string.empty": "product type is required.",
                })
            
        }),
        params: Joi.object({
            id: Joi.string()
                .required()
                .messages({
                    "string.empty": "customer id params is required.",
                }),
        })
    }),
    async (req, res) => await getCutomerInvoice(req, res)
);

export default invoiceRouter;