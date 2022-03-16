import express from 'express';
import customersRouter from './routes/customers.routes';

const router = express.Router();

router.use('/customers', customersRouter);


export default router;
