import { Router } from "express";
import {
  createWork,
  deleteWork,
  getWork,
  getWorks,
  updateWork,
} from "../../controllers/works.controllers.js";

const router = Router();

router.get("/api/v1/portfolio/:id", getWork);
router.get("/api/v1/portfolio", getWorks);
router.post("/api/v1/portfolio", createWork);
router.put("/api/v1/portfolio/:id", updateWork);
router.delete("/api/v1/portfolio/:id", deleteWork);

export default router;
