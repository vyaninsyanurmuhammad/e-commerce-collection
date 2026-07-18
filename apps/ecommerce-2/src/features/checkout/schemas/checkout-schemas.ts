// apps/ecommerce-2/src/features/checkout/schemas/checkout-schemas.ts
import { z } from "zod";

export const shippingSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email"),
  address: z.string().trim().min(4, "Enter your address"),
  city: z.string().trim().min(2, "Enter your city"),
  zip: z.string().trim().min(3, "Enter a valid postal code"),
  country: z.string().trim().min(2, "Enter your country"),
});
export type ShippingFormData = z.infer<typeof shippingSchema>;

export const paymentSchema = z.object({
  cardName: z.string().trim().min(2, "Enter the name on the card"),
  cardNumber: z
    .string()
    .trim()
    .regex(/^[\d ]{13,23}$/, "Enter a valid card number"),
  expiry: z
    .string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format"),
  cvc: z
    .string()
    .trim()
    .regex(/^\d{3,4}$/, "Enter a valid CVC"),
});
export type PaymentFormData = z.infer<typeof paymentSchema>;
