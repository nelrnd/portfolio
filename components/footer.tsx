import Link from "next/link"
import Section from "./section"
import data from "@/data.json"
import { getYear } from "@/lib/utils"

export default function Footer() {
  const { footerTitle, contact, socials } = data

  return (
    <Section as="footer">
      <div className="space-y-6 sm:space-y-[3.75rem]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-[3.75rem] uppercase">
          <div>
            <Link href={"mailto:" + contact.email} className="p-1">
              {contact.email}
            </Link>
          </div>
          <ul className="flex items-center gap-[2.5rem] sm:gap-[5rem]">
            {socials.map((social) => (
              <li key={social.name}>
                <Link href={social.url} target="_blank" className="p-1">
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-soft">
          © {getYear()} {footerTitle}
        </p>
      </div>
    </Section>
  )
}
