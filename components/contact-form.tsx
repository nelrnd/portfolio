"use client"

export default function ContactForm() {
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
