"use client"

import { useActionState } from "react"
import { sendEmail, SendEmailState } from "@/lib/actions"
import { MagneticButton } from "./magnetic"
import { useTranslations } from "next-intl"

export default function ContactForm() {
  const t = useTranslations("Contact")
  const initialState: SendEmailState = { errors: {}, data: {} }
  const [state, formAction, isPending] = useActionState(sendEmail, initialState)

  return (
    <form action={formAction} className="space-y-8 md:space-y-12 md:text-xl">
      <div>
        <input
          type="text"
          name="name"
          placeholder={t("form.name")}
          className="w-full h-[2.75em] border-b border-b-subtle focus:border-b-foreground focus:outline-none"
          defaultValue={state.data?.name}
        />
        {state.errors?.name && (
          <p className="text-red-400 text-sm mt-2">{state.errors.name.at(0)}</p>
        )}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder={t("form.email")}
          className="w-full h-[2.75em] border-b border-b-subtle focus:border-b-foreground focus:outline-none"
          defaultValue={state.data?.email}
        />
        {state.errors?.email && (
          <p className="text-red-400 text-sm mt-2">
            {state.errors.email.at(0)}
          </p>
        )}
      </div>
      <div>
        <input
          type="url"
          name="website-url"
          placeholder={t("form.website")}
          className="w-full h-[2.75em] border-b border-b-subtle focus:border-b-foreground focus:outline-none"
          defaultValue={state.data?.websiteUrl}
        />
        {state.errors?.websiteUrl && (
          <p className="text-red-400 text-sm mt-2">
            {state.errors.websiteUrl.at(0)}
          </p>
        )}
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          placeholder={t("form.message")}
          className="w-full h-[6em] border-b border-b-subtle focus:border-b-foreground focus:outline-none"
          defaultValue={state.data?.message}
        />
        {state.errors?.message && (
          <p className="text-red-400 text-sm mt-2">
            {state.errors.message.at(0)}
          </p>
        )}
      </div>
      {state.message && <p>{state.message}</p>}

      <MagneticButton
        type="submit"
        disabled={isPending}
        className="bg-foreground text-background w-full font-medium"
        locked={true}
      >
        {isPending ? "Loading..." : t("form.submit")}
      </MagneticButton>
    </form>
  )
}
