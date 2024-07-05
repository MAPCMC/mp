"use server";

import { revalidatePath } from "next/cache";
import { emailSchema, quotationSchema } from "@/lib/validations";
import { z, ZodError } from "zod";

export type State =
  | {
      status: "OK";
      message: string;
    }
  | {
      status: "ERROR";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | {
      status: "IDLE";
      message: string;
    };

export async function sendEmail(
  prevState: State | null,
  formData: FormData,
): Promise<State> {
  try {
    if (formData.get("email2") !== "") {
      return {
        status: "ERROR",
        message: "Niet verwerkt. Dit is waarschijnlijk spam.",
      };
    }

    const { email, subject, text } = emailSchema.parse(formData);

    // TODO: Send email

    revalidatePath("/");
    return { status: "OK", message: "Bedankt voor je bericht." };
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: "ERROR",
        message: "Fout in het formulier. Controleer de velden.",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      };
    }
    return { status: "ERROR", message: "Er is een fout opgetreden." };
  }
}

export async function sendQuotationRequest(
  data: z.infer<typeof quotationSchema>,
) {
  return data;
}
