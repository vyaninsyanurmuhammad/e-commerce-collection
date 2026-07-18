// apps/ecommerce-2/src/features/storefront/components/storefront-newsletter-form.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { newsletterSchema, type NewsletterFormData } from "../schemas/storefront-schemas";

export function StorefrontNewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<NewsletterFormData>({ resolver: zodResolver(newsletterSchema), defaultValues: { email: "" } });

  if (submitted) {
    return <div className="text-sm font-medium text-ink">Thanks for subscribing.</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => setSubmitted(true))} className="flex">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="sr-only">Email address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email address" className="rounded-r-none border-r-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-l-none rounded-r-full bg-ink px-5 text-[13px] text-white hover:bg-ink/90">
          SUBSCRIBE
        </Button>
      </form>
    </Form>
  );
}
