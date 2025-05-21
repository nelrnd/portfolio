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
      <EndNote />
    </main>
  )
}
