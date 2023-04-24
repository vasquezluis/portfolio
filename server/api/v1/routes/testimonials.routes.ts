import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/testimonials.controllers";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { CreateTestimonialSchema } from "../schemas/testimonials.schema";

const router = Router();

router.get("/api/v1/testimonials/:id", getItem);
router.get("/api/v1/testimonials", getItems);
router.post(
  "/api/v1/testimonials",
  schemaValidation(CreateTestimonialSchema),
  createItem
);
router.put("/api/v1/testimonials/:id", updateItem);
router.delete("/api/v1/testimonials/:id", deleteItem);

export default router;
