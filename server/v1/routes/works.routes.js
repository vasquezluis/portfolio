import { Router } from "express";
import {
  createWorks,
  deleteWorks,
  getWork,
  getWorks,
  updateWorks,
} from "../../controllers/works.controllers.js";

const router = Router();

router.get("/api/v1/works/:id", getWork);
router.get("/api/v1/works", getWorks);
router.post("/api/v1/works", createWorks);
router.put("/api/v1/works/:id", updateWorks);
router.delete("/api/v1/works/:id", deleteWorks);

export default router;
