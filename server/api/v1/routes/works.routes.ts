import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItemByQueryName,
  getItems,
  updateItem,
} from "../controllers/works.controllers";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { CreateWorkSchema } from "../schemas/works.schema";

const router = Router();

router.get("/api/v1/works/:id", getItem);
router.get("/api/v1/works/:name", getItemByQueryName);
router.get("/api/v1/works", getItems);
router.post("/api/v1/works", schemaValidation(CreateWorkSchema), createItem);
router.put("/api/v1/works/:id", updateItem);
router.delete("/api/v1/works/:id", deleteItem);

export default router;
