import { z } from "zod";

export const CreateTestimonialSchema = z.object({
  body: z.object({
    image: z
      .string({
        required_error: "image is required",
        invalid_type_error: "image must be a string",
      })
      .url()
      .min(1)
      .optional(),
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      })
      .min(1),
    job: z
      .string({
        required_error: "job is required",
        invalid_type_error: "job must be a string",
      })
      .min(1),
    testimonial: z
      .string({
        required_error: "testimonial is required",
        invalid_type_error: "testimonial must be a string",
      })
      .min(1),
  }),
});
