import AnimatedHeading from "@/components/animated-heading"
import { ProjectList } from "@/components/project"
import Section from "@/components/section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work",
}

export default async function Page() {
  return (
    <main>
      <Section>
        <AnimatedHeading>Selected works</AnimatedHeading>
        <ProjectList />
      </Section>
    </main>
  )
}
