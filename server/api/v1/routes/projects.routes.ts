import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { CreateProjectSchema } from "../schemas/projects.schema";
import {
  createItem,
  deleteItem,
  getItem,
  getItemByQueryName,
  getItems,
  updateItem,
} from "../controllers/projects.controllers";

const router = Router();

router.get("/api/v1/projects/:id", getItem);
router.get("/api/v1/projects/:name", getItemByQueryName);
router.get("/api/v1/projects", getItems);
router.post(
  "/api/v1/projects",
  schemaValidation(CreateProjectSchema),
  createItem
);
router.put("/api/v1/projects/:id", updateItem);
router.delete("/api/v1/projects/:id", deleteItem);

export default router;
