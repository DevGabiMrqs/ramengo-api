import { Router } from 'express';
import { getAllBroths } from '../controllers/brothsController';

const router = Router();

router.get('/', getAllBroths)

export default router;
