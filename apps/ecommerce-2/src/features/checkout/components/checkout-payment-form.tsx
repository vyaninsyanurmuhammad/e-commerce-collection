// apps/ecommerce-2/src/features/checkout/components/checkout-payment-form.tsx
"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCart } from "@/features/cart";
import { useCheckout } from "../hooks/use-checkout";
import { shippingCost } from "../lib/checkout-math";
import { paymentSchema, type PaymentFormData } from "../schemas/checkout-schemas";

export function CheckoutPaymentForm() {
  const router = useRouter();
  const { cartSubtotal } = useCart();
  const { payment, setPayment, placeOrder } = useCheckout();
  const form = useForm<PaymentFormData>({ resolver: zodResolver(paymentSchema), defaultValues: payment });
  const total = cartSubtotal + shippingCost(cartSubtotal);

  const onSubmit = (data: PaymentFormData) => {
    setPayment(data);
    const orderNumber = placeOrder();
    if (orderNumber) router.push("/order-confirmation");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3.5">
        <FormField
          control={form.control}
          name="cardName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Name on card</FormLabel>
              <FormControl>
                <Input placeholder="Name on card" className="rounded-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Card number</FormLabel>
              <FormControl>
                <Input placeholder="Card number" maxLength={19} className="rounded-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3.5">
          <FormField
            control={form.control}
            name="expiry"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="sr-only">Expiry</FormLabel>
                <FormControl>
                  <Input placeholder="MM / YY" maxLength={7} className="rounded-lg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="sr-only">CVC</FormLabel>
                <FormControl>
                  <Input placeholder="CVC" maxLength={4} className="rounded-lg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p className="mt-1 text-xs text-ink/50">This is a demo checkout — no real payment is processed.</p>
        <div className="mt-3 flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/checkout/shipping")}
            className="rounded-full border-ink px-6 text-ink hover:bg-transparent"
          >
            Back
          </Button>
          <Button type="submit" className="h-auto flex-1 rounded-full bg-ink py-3.5 text-sm text-white hover:bg-ink/90">
            Place Order — ${total}
          </Button>
        </div>
      </form>
    </Form>
  );
}
