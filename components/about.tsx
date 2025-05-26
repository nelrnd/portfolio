import data from "@/data.json"
import Section from "./section"
import AnimatedHeading from "./animated-heading"

export default async function About() {
  const { about } = data

  return (
    <Section>
      <AnimatedHeading>
        A few words
        <br />
        about me
      </AnimatedHeading>
      <p className="fluid-copy">{about}</p>
    </Section>
  )
}
