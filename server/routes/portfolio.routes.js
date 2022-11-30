import { Router } from "express";
import { getWorks } from "../controllers/portfolio.controllers.js";

const router = Router();

router.get("/portfolio", getWorks);

export default router;
