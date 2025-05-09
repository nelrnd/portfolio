import Hero from "@/components/hero"
import Projects from "@/components/projects"
import data from "@/data.json"
import Link from "next/link"

export default async function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}

async function About() {
  const { about } = data
  return (
    <section>
      <p>{about}</p>
    </section>
  )
}

async function Contact() {
  const { contact, socials } = data
  return (
    <section>
      <p>{contact.email}</p>
      <ul>
        {socials.map((social) => (
          <li key={social.name}>
            <Link href={social.url} target="_blank">
              {social.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
