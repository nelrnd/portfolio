import data from "@/data.json"
import Link from "next/link"

export default function ContactInfo() {
  const { contact, socials } = data

  return (
    <div className="space-y-8">
      <div>
        <h3 className="title mb-2">Contact details</h3>
        <ul className="space-y-2">
          {contact.contacts.map((contact) => (
            <li key={contact.name}>
              <Link href={contact.url}>{contact.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="title mb-2">Socials</h3>
        <ul className="space-y-2">
          {socials.map((social) => (
            <li key={social.name}>
              <Link href={social.url} target="_blank">
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
