import data from "@/data.json"
import Section from "./section"

export default async function Hero() {
  const { hero } = data

  return (
    <Section containerClassName="py-32">
      <h1>{hero.title}</h1>
      <p>{hero.subTitle}</p>
    </Section>
  )
}
