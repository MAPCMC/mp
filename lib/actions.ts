"use server";

// import { revalidatePath } from "next/cache";
import {
  contactSchema,
  quotationSchema,
  jobOfferSchema,
} from "@/lib/validations";
import { z } from "zod";
// import { createQuotationRequest, createJobOffer } from "@/db/queries";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtpexample",
  port: process.env.EMAIL_PORT || "portnumber",
  auth: {
    user: process.env.EMAIL_ADDRESS || "youremail",
    pass: process.env.EMAIL_PW || "yourpassword",
  },
});

type SendEmailResponse = {
  status: "SUCCESS" | "ERROR";
  message: string;
};

const sendEmail = async ({
  from,
  to,
  subject,
  html,
}: nodemailer.SendMailOptions): Promise<SendEmailResponse> => {
  const mailOptions = {
    from,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: "SUCCESS", message: "Verzending gelukt" };
  } catch (error) {
    return { status: "ERROR", message: "Verzending mislukt" };
  }
};

export default sendEmail;

export async function sendContactRequest(data: z.infer<typeof contactSchema>) {
  const mailResponse = await sendEmail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: data.subject || "Contactformulier",
    html: `
      <p>Email: ${data.email}</p>
      <p>Bericht: ${data.text}</p>
    `,
  });

  return mailResponse;
}

export async function sendQuotationRequest(
  data: z.infer<typeof quotationSchema>,
) {
  const mailResponse = await sendEmail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Offerte aanvraag",
    html: `
      <p>Naam: ${data.firstName} ${data.lastName}</p>
      <p>Email: ${data.email}</p>
      <p>Telefoon: ${data.phone}</p>
      <p>Bericht: ${data.text}</p>
    `,
  });

  return mailResponse;
}

export async function sendJobOffer(data: z.infer<typeof jobOfferSchema>) {
  const mailResponse = await sendEmail({
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Beschikbaarheid aanvraag",
    html: `
      <p>URL: ${data.url}</p>
      <p>Naam: ${data.firstName} ${data.lastName}</p>
      <p>Email: ${data.email}</p>
      <p>Telefoon: ${data.phone}</p>
      <p>Bericht: ${data.text}</p>
    `,
  });

  return mailResponse;
}
