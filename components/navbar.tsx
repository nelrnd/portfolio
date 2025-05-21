import Link from "next/link"
import data from "@/data.json"
import Section from "./section"
import MobileMenu from "./mobile-menu"

export default function Navbar() {
  const { name, pages } = data

  return (
    <Section
      as="header"
      className="py-0 sm:py-0 lg:py-0"
      containerClassName="h-[80px] flex items-center justify-center"
    >
      <nav className="flex-1">
        <ul className="flex items-center gap-8">
          <li className="mr-auto">
            <Link href="/" className="p-1 uppercase text-xl">
              {name}
            </Link>
          </li>

          <div className="hidden sm:flex items-center gap-8 relative top-[2px]">
            {pages.map((page) => (
              <li key={page.url}>
                <Link href={page.url} className="p-1 uppercase">
                  {page.name}
                </Link>
              </li>
            ))}
          </div>

          <div className="block sm:hidden h-8">
            <MobileMenu />
          </div>
        </ul>
      </nav>
    </Section>
  )
}
