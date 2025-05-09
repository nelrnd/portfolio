import Link from "next/link"
import data from "@/data.json"
import Section from "./section"

export default function Navbar() {
  const { name, pages } = data

  return (
    <Section as="header" containerClassName="py-10">
      <nav>
        <ul className="flex items-center gap-8">
          <li className="mr-auto text-2xl">
            <Link href="/">{name}</Link>
          </li>

          {pages.map((page) => (
            <li key={page.url}>
              <Link href={page.url} className="uppercase">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  )
}
