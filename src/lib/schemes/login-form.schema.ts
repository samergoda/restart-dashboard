import z from "zod";

export default function useLoginSchema() {
  const schema = z.object({
    email: z.email({ error: "Your email is required" }).min(2, "email is must be more than 1 character"),
    password: z.string({ error: "Password is required" }).min(4, "password is required"),
  });
  return schema;
}
