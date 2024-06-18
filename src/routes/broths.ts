import { Router } from "express";
import { getAllBroths } from "../controllers/brothsController";
import { checkApiKey } from "../middleware/checkApiKey";

const router = Router();

router.use(checkApiKey);

router.get("/", getAllBroths);

export default router;
