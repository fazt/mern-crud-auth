import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(2, {
    message: "Please enter a valid username.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
