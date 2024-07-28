interface ContactProps {
  contact: {
    email: string
    github?: string
    twitter?: string
  }
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section>
      <h2>Contact</h2>
      <ul>
        {contact.email && <li>{contact.email}</li>}
        {contact.github && <li>{contact.github}</li>}
        {contact.twitter && <li>{contact.twitter}</li>}
      </ul>
    </section>
  )
}
