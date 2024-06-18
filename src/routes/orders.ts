import { Router } from 'express';
import { createOrder } from '../controllers/orderController';
import { checkApiKey } from '../middleware/checkApiKey';

const router = Router();

router.use(checkApiKey);

router.post('/', createOrder);

export default router;
