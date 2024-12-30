import * as z from "zod";

export const loginSchema = z.object({
  email: z
  .string()
  .min(1, "Email is required")
  .email("Invalid email format"),

  password: z
  .string()
  .min(1, "Password is required"),
  
});

export const registerSchema = z.object({
  name:z
    .string()
    .min(1,"Username is too short")
    .max(20,"Username has too many characters")
  ,
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(100, "Your email has too many characters"),

  password: z
    .string()
    .min(6, "Password is too short")
    .max(20, "Password is too long")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
});
