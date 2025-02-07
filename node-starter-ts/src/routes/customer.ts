import { createCustomer, getCustomers, getCustomersv2 } from '@/controllers/customers';
import  express  from 'express';
const customerRouter = express.Router()

customerRouter.get("/customers", getCustomers);
customerRouter.get("/customers", getCustomersv2);
customerRouter.post("/customers", createCustomer);


export default customerRouter