import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string()
        .min(8)
        .regex(/[A-Z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least a number"),
});


export const signupSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string()
        .min(8)
        .regex(/[A-Z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least a number"),
});


export type LoginSchema = z.infer<typeof loginSchema>;
export type signupSchema = z.infer<typeof signupSchema>