"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobOfferSchema } from "@/lib/validations";

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
import { sendJobOffer } from "@/lib/actions";

export function JobOfferForm() {
  const form = useForm<z.infer<typeof jobOfferSchema> & { email2?: string }>({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      email2: "",
      phone: "",
      url: "",
      text: "",
    },
    resolver: zodResolver(jobOfferSchema),
  });

  async function onSubmit(data: z.infer<typeof jobOfferSchema>) {
    const response = await sendJobOffer(data);

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
        className="group grid gap-x-2 gap-y-4 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel showRequired>voornaam</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel showRequired>achternaam</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                showRequired={
                  !(jobOfferSchema.shape.email instanceof z.ZodOptional)
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel showRequired>telefoon</FormLabel>
              <FormControl>
                <Input placeholder="06-" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Link naar vacature</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel showRequired>bericht</FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  placeholder="Dag Maarten, ik heb een interessante opdracht! ..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap justify-between gap-3 md:col-span-2">
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
