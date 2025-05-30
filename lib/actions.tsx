"use server"

import { z } from "zod"
import { Resend } from "resend"
import { getTranslations } from "next-intl/server"

export type SendEmailState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    websiteUrl?: string[]
  }
  data?: {
    name?: string
    email?: string
    message?: string
    websiteUrl?: string
  }
  message?: string
}

const sendEmailSchema = (t: (name: string) => string) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, t("errors.nameMin"))
      .max(50, t("errors.nameMax")),
    email: z
      .string()
      .min(1, t("errors.emailMin"))
      .max(50, t("errors.emailMax"))
      .email(t("errors.emailFormat")),
    websiteUrl: z.string().trim().max(200, t("errors.websiteMax")).optional(),
    message: z
      .string()
      .trim()
      .min(1, t("errors.messageMin"))
      .max(2000, t("errors.messageMax")),
  })

export async function sendEmail(prevState: SendEmailState, formData: FormData) {
  const t = await getTranslations("Contact.form")

  const validatedFields = sendEmailSchema(t).safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    websiteUrl: formData.get("website-url"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      data: {
        name: (formData.get("name") || "") as string,
        email: (formData.get("email") || "") as string,
        websiteUrl: (formData.get("website-url") || "") as string,
        message: (formData.get("message") || "") as string,
      },
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: "nel.dev contact form <info@nel.dev>",
    to: [process.env.CONTACT_FORM_DEST as string],
    subject: `(nel.dev) New message from ${validatedFields.data.name} (${validatedFields.data.email})`,
    text: validatedFields.data.message,
  })

  console.log(data)

  if (error) {
    return { message: t("serverError") }
  }

  return { message: t("sent") }
}
