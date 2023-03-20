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
    link_1: z.object({
      url: z.string({
        required_error: "image is required",
        invalid_type_error: "image must be a string",
      }),
      icon: z
        .string({
          required_error: "icon is required",
          invalid_type_error: "icon must be a string",
        })
        .url(),
    }),
    link_2: z
      .object({
        url: z.string({
          required_error: "image is required",
          invalid_type_error: "image must be a string",
        }),
        icon: z
          .string({
            required_error: "icon is required",
            invalid_type_error: "icon must be a string",
          })
          .url(),
      })
      .optional(),
    tech_1: z.object({
      name: z.string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      }),
      icon: z
        .string({
          required_error: "icon is required",
          invalid_type_error: "icon must be a string",
        })
        .url(),
    }),
    tech_2: z
      .object({
        name: z.string({
          required_error: "name is required",
          invalid_type_error: "name must be a string",
        }),
        icon: z
          .string({
            required_error: "icon is required",
            invalid_type_error: "icon must be a string",
          })
          .url(),
      })
      .optional(),
    tech_3: z
      .object({
        name: z.string({
          required_error: "name is required",
          invalid_type_error: "name must be a string",
        }),
        icon: z
          .string({
            required_error: "icon is required",
            invalid_type_error: "icon must be a string",
          })
          .url(),
      })
      .optional(),
    type: z
      .string({
        required_error: "type is required",
        invalid_type_error: "type must be a string",
      })
      .min(1),
  }),
});
