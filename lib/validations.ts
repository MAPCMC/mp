import { zfd } from "zod-form-data";
import { z } from "zod";

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
