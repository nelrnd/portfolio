"use server"

import { z } from "zod"
import data from "@/data.json"

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

const sendEmailSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  email: z
    .string()
    .email("Email format is invalid")
    .min(1, "Email is required")
    .max(50, "Email cannot exceed 50 characters"),
  websiteUrl: z
    .string()
    .trim()
    .max(200, "Website URL cannot exceed 200 characters")
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(
      2000,
      `Message cannot exceed 2000 characters. For longer messages, send me an email at ${data.contact.email}`
    ),
})

export async function sendEmail(prevState: SendEmailState, formData: FormData) {
  const validatedFields = sendEmailSchema.safeParse({
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

  return { message: "sent!" }
}
