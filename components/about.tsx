import data from "@/data.json"
import Section from "./section"

export default async function About() {
  const { about } = data

  return (
    <Section>
      <p>{about.copy}</p>
    </Section>
  )
}
