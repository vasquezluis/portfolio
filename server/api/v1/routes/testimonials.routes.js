import { Router } from "express";
import {
  createTestimonials,
  deleteTestimonials,
  getTestimonials,
  getTestimony,
  updateTestimonials,
} from "../../controllers/testimonials.controllers.js";

const router = Router();

router.get("/api/v1/testimonials/:id", getTestimony);
router.get("/api/v1/testimonials", getTestimonials);
router.post("/api/v1/testimonials", createTestimonials);
router.put("/api/v1/testimonials/:id", updateTestimonials);
router.delete("/api/v1/testimonials/:id", deleteTestimonials);

export default router;
