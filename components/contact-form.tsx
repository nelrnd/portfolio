"use client"

import Button from "./button"

export default function ContactForm() {
  return (
    <form className="space-y-8 md:space-y-16 md:text-4xl">
      <div>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full name *"
          className="w-full h-[50px] md:h-[80px] border-b border-b-subtle focus:border-b-foreground focus:outline-none"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email *"
          className="w-full h-[50px] md:h-[80px] border-b border-b-subtle focus:border-b-foreground focus:outline-none"
        />
      </div>
      <div>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company name"
          className="w-full h-[50px] md:h-[80px] border-b border-b-subtle focus:border-b-foreground focus:outline-none"
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          placeholder="Message *"
          className="w-full h-[150px] border-b border-b-subtle focus:border-b-foreground focus:outline-none"
        />
      </div>
      <Button>Envoyer</Button>
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
