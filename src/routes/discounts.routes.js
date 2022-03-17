import express from 'express';
import { celebrate, Joi } from 'celebrate';
import { 
    createDiscount,
    getDiscounts,
    getDiscountByType
} from '../controllers/discounts.controllers';

const discountsRouter = express.Router();

discountsRouter.post('/', 
    celebrate({
        body: Joi.object({
            type: Joi.string()
                .required()
                .messages({
                    "string.empty": "discount type is required.",
                }),
            amount: Joi.number(),
            percentage: Joi.number()
                        .required()
                        .messages({
                            "string.empty": "percentage is required.",
                            "string.number": "percentage should be a number",
                        })
        }),
    }),
    async (req, res) => await createDiscount(req, res)
)
.get('/', async (req, res) => await getDiscounts(req, res))
.post('/findByType', 
    celebrate({
        body: Joi.object({
            type: Joi.string()
                .required()
                .messages({
                    "string.empty": "type is required.",
                })
        }),
    }),
    async (req, res) => getDiscountByType(req, res)
)


export default discountsRouter;