"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactRequest } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Loader, SendHorizonalIcon } from "lucide-react";
import { contactSchema } from "@/lib/validations";

export function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema> & { email2?: string }>({
    mode: "all",
    defaultValues: {
      email: "",
      email2: "",
      subject: "",
      text: "",
    },
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    const response = await sendContactRequest(data);

    if (response.status === "ERROR") {
      toast({
        title: "Verzenden is mislukt.",
        description: "Probeer het later opnieuw.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Bedankt voor je bericht!",
        description: "Ik neem snel contact met je op.",
        variant: "success",
      });
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="group grid gap-x-2 gap-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                showRequired={
                  !(contactSchema.shape.email instanceof z.ZodOptional)
                }
              >
                e-mailadres
              </FormLabel>
              <FormControl>
                <Input placeholder="@" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email2"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel showRequired>
                e-mailadres bevestiging (niet invullen! Dit is een spam check)
              </FormLabel>
              <FormControl>
                <Input
                  tabIndex={-1}
                  placeholder="Bevestig het e-mailadres (niet invullen! Dit is een spam check)"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Niet invullen! Dit is een spam check
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => {
            const maxLength =
              contactSchema.shape.subject._def.innerType._def.checks?.find(
                (c) => c.kind === "max",
              )?.value || 0;
            return (
              <FormItem>
                <FormLabel>onderwerp</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {!!field.value && field.value?.length > 0 && maxLength > 0 && (
                  <FormDescription>
                    {field.value?.length}/{maxLength} tekens
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="text"
          render={({ field }) => {
            const maxLength =
              contactSchema.shape.text._def.checks.find((c) => c.kind === "max")
                ?.value || 0;
            return (
              <FormItem className="">
                <FormLabel showRequired>bericht</FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    placeholder="Dag Maarten! Ik heb een vraag ..."
                    {...field}
                  />
                </FormControl>
                {field.value.length > 0 && maxLength > 0 && (
                  <FormDescription>
                    {field.value.length}/{maxLength} tekens
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <div className="flex flex-wrap justify-between gap-3">
          <Button
            type="submit"
            className="group/button w-max min-w-32"
            disabled={form.formState.isLoading || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <span className="sr-only">er wordt verzonden</span>
                <Loader className="motion-safe:animate-[spin_2s_linear_infinite]" />
              </>
            ) : (
              <>
                verzenden
                <SendHorizonalIcon className="-mr-1 ml-2 h-4 w-4  basic:!animate-none basic:transition-transform basic:group-hover/button:translate-x-2 basic:group-focus-visible/button:translate-x-2 group-hover/button:motion-safe:animate-bounce-x-2" />
              </>
            )}
          </Button>
          {(Object.keys(form.formState.errors).length > 0 ||
            form.formState.isDirty) && (
            <Button
              type="button"
              variant="secondary"
              className="w-auto place-self-end"
              onClick={() => form.reset()}
            >
              wissen
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
