"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail, State } from "@/lib/actions";
import {
  FieldErrors,
  useForm,
  UseFormRegister,
  FieldPath,
} from "react-hook-form";
import { Loader, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { emailSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useToast } from "@/components/ui/use-toast";

export interface FormValues {
  email: string;
  subject: string;
  text: string;
}

const initialState: State = {
  status: "IDLE",
  message: "",
};

function FormContent({
  register,
  isValid,
  isActive,
  errors,
  onReset,
}: {
  register: UseFormRegister<FormValues>;
  isValid: boolean;
  isActive: boolean;
  errors: FieldErrors<FormValues>;
  onReset: () => void;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <div>
        <Label htmlFor="email">
          E-mailadres <abbr className="text-red-500">*</abbr>
        </Label>
        <Input
          {...register("email")}
          type="email"
          placeholder="Mijn e-mailadres"
          required
        />
        <span className="text-sm text-red-500">
          <ErrorMessage name="email" errors={errors} />
        </span>
      </div>
      <Input
        type="email"
        name="email2"
        placeholder="Bevestig het e-mailadres (niet invullen! Dit is een spam check)"
        className="hidden"
      />
      <div>
        <Label htmlFor="subject">
          Onderwerp <abbr className="text-red-500">*</abbr>
        </Label>
        <Input
          {...register("subject")}
          type="text"
          placeholder="Ik wil een site bouwen"
          required
        />
        <span className="text-sm text-red-500">
          <ErrorMessage name="subject" errors={errors} />
        </span>
      </div>
      <div>
        <Label htmlFor="text">
          Bericht <abbr className="text-red-500">*</abbr>
        </Label>
        <Textarea
          {...register("text")}
          placeholder="Dag Maarten, laten we koffie drinken!"
          rows={3}
          required
        ></Textarea>
        <span className="text-sm text-red-500">
          <ErrorMessage name="text" errors={errors} />
        </span>
      </div>
      <div className="flex items-center gap-2">
        {pending && <Loader className="animate-spin" />}
        <Button
          type="submit"
          aria-disabled={pending || !isValid}
          disabled={pending || !isValid}
          className="grow"
        >
          Verzenden
        </Button>
        {isActive && (
          <Button variant="ghost" type="button" onClick={onReset}>
            Wissen
          </Button>
        )}
      </div>
    </>
  );
}

export function ContactForm() {
  const {
    register,
    formState: { isDirty, isValid, errors },
    setError,
    reset,
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      email: "",
      subject: "",
      text: "",
    },
    resolver: zodResolver(emailSchema),
  });
  const [state, formAction] = useActionState<State, FormData>(
    sendEmail,
    initialState,
  );
  const { toast } = useToast();

  useEffect(() => {
    if (!state || state.status === "IDLE") {
      return;
    }
    // In case our form action returns `error` we can now `setError`s
    if (state.status === "ERROR") {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<FormValues>, {
          message: error.message,
        });
      });
    }

    if (state.status === "OK") {
      toast({
        description: state.message,
        variant: "success",
      });
      reset();
    }
  }, [state, setError, reset, toast]);

  return (
    <form action={formAction} className="group flex flex-col gap-2">
      <FormContent
        register={register}
        isValid={isValid}
        errors={errors}
        onReset={() => reset()}
        isActive={Object.keys(errors).length > 0 || isDirty}
      />
      {state.status === "ERROR" && (
        <p aria-live="polite" role="status" className="text-sm text-red-500">
          {state?.message}
        </p>
      )}
    </form>
  );
}
