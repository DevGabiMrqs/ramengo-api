import { Router } from "express";
import { getAllProteins } from "../controllers/proteinController";

const router = Router();

router.get("/", getAllProteins);

export default router;
