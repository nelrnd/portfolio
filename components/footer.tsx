import Link from "next/link"
import Section from "./section"
import data from "@/data.json"
import { getYear } from "@/lib/utils"

export default function Footer() {
  const { footerTitle, contact, socials } = data

  return (
    <Section as="footer">
      <div className="space-y-[3.75rem]">
        <ul className="flex items-center gap-[3.75rem] uppercase">
          <li className="mr-auto">
            <Link href={"mailto:" + contact.email} className="p-1">
              {contact.email}
            </Link>
          </li>
          {socials.map((social) => (
            <li key={social.name}>
              <Link href={social.url} target="_blank" className="p-1">
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
        <p>
          © {getYear()} {footerTitle}
        </p>
      </div>
    </Section>
  )
}
