import { z } from "zod";

export default function useProductSchema() {
  const schema = z.object({
    name: z.string({ error: "Name is required" }).min(2, "Name must be at least 2 characters"),

    image: z.string({ error: "Image URL is required" }).url("Must be a valid image URL"),

    description: z
      .string({ error: "Description is required" })
      .min(10, "Description must be at least 10 characters"),

    price: z.number({ error: "Price is required" }).min(0, "Price must be 0 or greater"),

    category: z.string({ error: "Category is required" }).min(1, "Category must not be empty"),
  });

  return schema;
}
