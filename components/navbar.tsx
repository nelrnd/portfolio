import Link from "next/link"
import data from "@/data.json"
import Section from "./section"

export default function Navbar() {
  const { name, pages } = data

  return (
    <Section as="header">
      <nav className="border p-8">
        <ul className="flex items-center gap-8">
          <li className="mr-auto">
            <Link href="/">{name}</Link>
          </li>

          {pages.map((page) => (
            <li key={page.url}>
              <Link href={page.url}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  )
}
