import data from "@/data.json"
import Section from "./section"

export default async function About() {
  const { about } = data

  return (
    <Section>
      <p className="text-2x leading-[180%]">{about.copy}</p>
    </Section>
  )
}
