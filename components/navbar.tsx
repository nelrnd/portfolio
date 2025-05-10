import Link from "next/link"
import data from "@/data.json"
import Section from "./section"
import MobileMenu from "./mobile-menu"

export default function Navbar() {
  const { name, pages } = data

  return (
    <Section
      as="header"
      containerClassName="py-0 h-[4rem] sm:h-[5.625rem] flex items-center justify-center"
    >
      <nav className="flex-1">
        <ul className="flex items-center gap-8">
          <li className="mr-auto text-xl sm:text-2xl">
            <Link href="/">{name}</Link>
          </li>

          <div className="hidden sm:flex sm:items-center sm:gap-8 relative top-[2px]">
            {pages.map((page) => (
              <li key={page.url}>
                <Link href={page.url} className="p-1 uppercase">
                  {page.name}
                </Link>
              </li>
            ))}
          </div>

          <div className="block sm:hidden size-8">
            <MobileMenu />
          </div>
        </ul>
      </nav>
    </Section>
  )
}
