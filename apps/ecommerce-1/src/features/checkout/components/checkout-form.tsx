// apps/ecommerce-1/src/features/checkout/components/checkout-form.tsx
"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { checkoutSchema, type CheckoutFormData } from "../schemas/checkout-schemas";
import { useCheckout } from "../hooks/use-checkout";
import { useCart } from "@/features/cart";

const DEFAULTS: CheckoutFormData = { email: "", name: "", address: "", city: "", zip: "", card: "", exp: "", cvc: "" };
const groupLabel = "mb-3.5 font-archivo text-[13px] font-bold tracking-wide text-ink uppercase";

export function CheckoutForm() {
  const router = useRouter();
  const { placeOrder } = useCheckout();
  const { cartTotal } = useCart();
  const form = useForm<CheckoutFormData>({ resolver: zodResolver(checkoutSchema), defaultValues: DEFAULTS });

  // The source prototype never reads these values on submit — validated for a real form
  // experience, but placeOrder() only needs the cart itself, matching that behavior.
  const onSubmit = () => {
    const orderNumber = placeOrder();
    if (orderNumber) router.push("/order-confirmation");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7">
        <div>
          <div className={groupLabel}>Contact</div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" className="rounded-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <div className={groupLabel}>Shipping Address</div>
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" className="rounded-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" className="rounded-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" className="rounded-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">ZIP code</FormLabel>
                    <FormControl>
                      <Input placeholder="ZIP Code" className="rounded-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div>
          <div className={groupLabel}>Payment</div>
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="card"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Card number</FormLabel>
                  <FormControl>
                    <Input placeholder="Card Number" className="rounded-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="exp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Expiry</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" className="rounded-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">CVC</FormLabel>
                    <FormControl>
                      <Input placeholder="CVC" className="rounded-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="h-auto rounded-none bg-ink py-4.5 text-[13px] font-bold tracking-wide text-white uppercase hover:bg-ink/90">
          Place Order — ${cartTotal.toFixed(2)} USD
        </Button>
      </form>
    </Form>
  );
}
