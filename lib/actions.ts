"use server";

import { revalidatePath } from "next/cache";
import {
  contactSchema,
  quotationSchema,
  jobOfferSchema,
} from "@/lib/validations";
import { z } from "zod";
// import { createQuotationRequest, createJobOffer } from "@/db/queries";

export async function sendContactRequest(data: z.infer<typeof contactSchema>) {
  revalidatePath("/contact");
  return data;
}

export async function sendQuotationRequest(
  data: z.infer<typeof quotationSchema>,
) {
  // createQuotationRequest(data);
  return data;
}

export async function sendJobOffer(data: z.infer<typeof jobOfferSchema>) {
  // createJobOffer(data);
  return data;
}
