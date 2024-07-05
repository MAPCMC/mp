import { zfd } from "zod-form-data";
import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const quotationSchema = z.object({
  firstName: z.string().min(1, {
    message: "Vul je voornaam in.",
  }),
  lastName: z.string().min(1, {
    message: "Vul je achternaam in.",
  }),
  email: z
    .string({
      required_error: "Vul een e-mailadres in.",
    })
    .email({
      message: "Vul een geldig e-mailadres in.",
    }),
  phone: z.string().regex(phoneRegex, {
    message: "Vul een telefoonnummer in.",
  }),
  text: z.string().min(3, {
    message: "Vul een langer bericht in.",
  }),
  file: z.any().optional(),
});

export const emailSchema = zfd.formData({
  email: zfd.text(
    z
      .string({
        required_error: "Vul een e-mailadres in",
      })
      .email("Vul een geldig e-mailadres in"),
  ),
  subject: zfd.text(
    z
      .string({
        required_error: "Vul een onderwerp in",
      })
      .min(2, "Vul een langer onderwerp in")
      .max(50, "Vul een korter onderwerp in"),
  ),
  text: zfd.text(
    z
      .string({
        required_error: "Vul een bericht in",
      })
      .min(2, "Vul een langer bericht in")
      .max(1200, "Vul een korter bericht in"),
  ),
});
