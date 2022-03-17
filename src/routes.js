import express from 'express';
import customersRouter from './routes/customers.routes';
import discountsRouter from './routes/discounts.routes';
import invoiceRouter from './routes/invoice.routes';

const router = express.Router();

router.use('/customers', customersRouter);
router.use('/discounts', discountsRouter);
router.use('/invoice', invoiceRouter);


export default router;
