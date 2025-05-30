"use client"

import { useActionState } from "react"
import Button from "./button"
import { sendEmail, SendEmailState } from "@/lib/actions"
import { MagneticButton } from "./magnetic"

export default function ContactForm() {
  const initialState: SendEmailState = { errors: {}, data: {} }
  const [state, formAction, isPending] = useActionState(sendEmail, initialState)

  return (
    <form action={formAction} className="space-y-8 md:space-y-12 md:text-xl">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your name"
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
          placeholder="Your email"
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
          placeholder="Website URL (optional)"
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
          placeholder="Your message"
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
        className="bg-foreground text-background w-full"
        locked={true}
      >
        {isPending ? "Loading..." : "Submit"}
      </MagneticButton>
    </form>
  )
}

export function ContactForm2() {
  return (
    <form>
      <div>
        <label htmlFor="fullName">Full name</label>
        <input type="text" name="fullName" id="fullName" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="company">Company name</label>
        <input type="text" name="company" id="company" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
      </div>
      <button>Send</button>
    </form>
  )
}
