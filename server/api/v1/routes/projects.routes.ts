import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { CreateProjectSchema } from "../schemas/projects.schema";
import { createItem, getItems } from "../controllers/projects.controllers";

const router = Router();

// router.get("/api/v1/projects/:id", getProject);
router.get("/api/v1/projects", getItems);
router.post(
  "/api/v1/projects",
  schemaValidation(CreateProjectSchema),
  createItem
);
// router.put("/api/v1/projects/:id", updateProjects);
// router.delete("/api/v1/projects/:id", deleteProjects);

export default router;
