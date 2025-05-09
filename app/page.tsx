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

async function Hero() {
  const { heroTitle } = data

  return (
    <section>
      <h1>{heroTitle}</h1>
    </section>
  )
}

async function Projects() {
  const { projects } = data

  return (
    <section>
      {projects.map((project) => (
        <div key={project.slug}>
          <h3>{project.title}</h3>
          <p>{project.subTitle}</p>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
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
  const { contact } = data
  return (
    <section>
      <p>{contact.email}</p>
      <ul>
        {contact.socials.map((social) => (
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
