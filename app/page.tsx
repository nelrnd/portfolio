import About from "@/components/about"
import CTA from "@/components/cta"
import Hero from "@/components/hero"
import { ProjectList } from "@/components/project"

export default async function Home() {
  return (
    <main>
      <Hero />
      <ProjectList />
      <About />
      <CTA />
    </main>
  )
}
