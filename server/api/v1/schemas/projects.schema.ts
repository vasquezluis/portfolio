import { z } from "zod";

export const CreateProjectSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "title is required",
        invalid_type_error: "title must be a string",
      })
      .min(1),
    description: z
      .string({
        required_error: "description is required",
        invalid_type_error: "Description must be a string",
      })
      .min(1),
    image: z
      .string({
        required_error: "image is required",
        invalid_type_error: "image must be a string",
      })
      .url()
      .min(1),
    link_1: z
      .string({
        required_error: "link_1 is required",
        invalid_type_error: "link_1 must be a string",
      })
      .min(1),
    link_2: z.string().optional(),
    tech_1: z
      .string({
        required_error: "tech_1 is required",
        invalid_type_error: "tech_1 must be a string",
      })
      .min(1),
    tech_2: z.string().optional(),
    tech_3: z.string().optional(),
    type: z
      .string({
        required_error: "type is required",
        invalid_type_error: "type must be a string",
      })
      .min(1),
  }),
});
