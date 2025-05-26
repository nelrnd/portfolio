import EndNote from "@/components/end-note"
import Hero from "@/components/hero"
import Marketing from "@/components/marketing"
import PersonalInfo from "@/components/personal-info"
import { ProjectList } from "@/components/project"
import Section from "@/components/section"

export default async function Home() {
  return (
    <main>
      <Hero />
      <Section>
        <h2 className="text-base mb-[1.875rem] sm:text-[1.875rem] sm:mb-[3.75rem] lg:text-[2.5rem] lg:mb-[5rem]">
          Here&apos;s some of my work
        </h2>
        <ProjectList />
      </Section>
      <Marketing />
      <PersonalInfo />
      <EndNote />
    </main>
  )
}
