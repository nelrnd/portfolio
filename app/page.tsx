import About from "@/components/about"
import CTA from "@/components/cta"
import EndNote from "@/components/end-note"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import { ProjectList } from "@/components/project"

export default async function Home() {
  return (
    <main>
      <Hero />
      <ProjectList />
      <Mission />
      <About />
      <CTA />
      <EndNote />
    </main>
  )
}
