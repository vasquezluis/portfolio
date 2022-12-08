import { Router } from "express";
import {
  createProjects,
  deleteProjects,
  getProject,
  getProjects,
  updateProjects,
} from "../../controllers/projects.controllers.js";

const router = Router();

router.get("/api/v1/projects/:id", getProject);
router.get("/api/v1/projects", getProjects);
router.post("/api/v1/projects", createProjects);
router.put("/api/v1/projects/:id", updateProjects);
router.delete("/api/v1/projects/:id", deleteProjects);

export default router;
