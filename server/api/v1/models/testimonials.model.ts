import { Schema, model } from "mongoose";
import { Testimonials } from "../interfaces/testimonials.interface";

// * testimonials schema based on accreditation interface

const TestimonialsSchema = new Schema<Testimonials>(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    job: {
      type: String,
    },
    testimonial: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, versionKey: false }
);

//* model creation
const TestimonialModel = model("testimonials", TestimonialsSchema);
export default TestimonialModel;
