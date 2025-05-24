import EndNote from "@/components/end-note"
import Hero from "@/components/hero"
import Marketing from "@/components/marketing"
import PersonalInfo from "@/components/personal-info"
import { ProjectList } from "@/components/project"

export default async function Home() {
  return (
    <main>
      <Hero />
      <ProjectList />
      <Marketing />
      <PersonalInfo />
      <EndNote />
    </main>
  )
}
