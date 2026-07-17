// apps/ecommerce-2/src/features/storefront/schemas/storefront-schemas.ts
import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
});
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
