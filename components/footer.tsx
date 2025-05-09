import Link from "next/link"
import Section from "./section"
import data from "@/data.json"
import { getYear } from "@/lib/utils"

export default function Footer() {
  const { name, pages, footerTitle, socials } = data

  return (
    <Section as="footer" containerClassName="py-16 space-y-8 border-t">
      <nav>
        <ul className="flex items-center gap-8">
          <li className="mr-auto">
            <Link href="/">{name}</Link>
          </li>
          {pages.map((page) => (
            <li key={page.url}>{page.name}</li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-between items-center gap-8">
        <p>
          © {getYear()} {footerTitle}
        </p>
        <ul className="flex items-center gap-8">
          {socials.map((social) => (
            <li key={social.name}>
              <Link href={social.url} target="_blank">
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
