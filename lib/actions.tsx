"use server"

import { z } from "zod"
import data from "@/data.json"
import { Resend } from "resend"
import { AbstractIntlMessages } from "next-intl"
import { Pathnames } from "next-intl/routing"
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

const sendEmailSchema = (t: any) =>
  z.object({
    name: z.string().trim().min(1, t("nameMin")).max(50, t("nameMax")),
    email: z
      .string()
      .min(1, t("emailMin"))
      .max(50, t("emailMax"))
      .email(t("emailFormat")),
    websiteUrl: z.string().trim().max(200, t("websiteMax")).optional(),
    message: z
      .string()
      .trim()
      .min(1, t("messageMin"))
      .max(2000, t("messageMax")),
  })

export async function sendEmail(prevState: SendEmailState, formData: FormData) {
  const t = await getTranslations("Contact.form.errors")

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
    return { message: "Something went wrong, try again" }
  }

  return { message: "Messange sent, thank you!" }
}
