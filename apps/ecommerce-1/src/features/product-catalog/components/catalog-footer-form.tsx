// apps/ecommerce-1/src/features/product-catalog/components/catalog-footer-form.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { footerSignupSchema, type FooterSignupFormData } from "../schemas/catalog-schemas";

export function CatalogFooterForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FooterSignupFormData>({ resolver: zodResolver(footerSignupSchema), defaultValues: { email: "" } });

  if (submitted) {
    return <div className="text-[13px] font-semibold text-ink">Thanks — your 10% code is on its way.</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => setSubmitted(true))} className="flex flex-wrap items-start gap-2.5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="min-w-45 flex-1">
              <FormLabel className="sr-only">Email address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email address" className="rounded-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="h-auto flex-none rounded-none bg-ink px-5.5 py-3.25 text-xs font-bold tracking-wide text-white hover:bg-accent-hover">
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
