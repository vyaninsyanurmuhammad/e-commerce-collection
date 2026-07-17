// apps/ecommerce-1/src/features/product-catalog/schemas/catalog-schemas.ts
import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
  consent: z.boolean().refine((v) => v === true, { message: "You must agree to continue" }),
});
export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const footerSignupSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
});
export type FooterSignupFormData = z.infer<typeof footerSignupSchema>;
