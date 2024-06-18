import { Router } from "express";
import { getAllProteins } from "../controllers/proteinController";
import { checkApiKey } from "../middleware/checkApiKey";

const router = Router();

router.use(checkApiKey);

router.get("/", getAllProteins);

export default router;
