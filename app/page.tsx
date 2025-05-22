import EndNote from "@/components/end-note"
import Hero from "@/components/hero"
import Mission from "@/components/mission"
import PersonalInfo from "@/components/personal-info"
import { ProjectList } from "@/components/project"
import Results from "@/components/results"

export default async function Home() {
  return (
    <main>
      <Hero />
      <ProjectList />
      <Mission />
      <Results />
      <PersonalInfo />
      <EndNote />
    </main>
  )
}
