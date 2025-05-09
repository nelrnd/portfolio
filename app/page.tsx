import About from "@/components/about"
import CTA from "@/components/cta"
import Hero from "@/components/hero"
import Projects from "@/components/projects"

export default async function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <CTA />
    </main>
  )
}
