import data from "@/data.json"
import Section from "./section"

export default async function Hero() {
  const { hero } = data

  return (
    <Section containerClassName="py-32">
      <h1 className="text-8x leading-[120%]">
        <span>{hero.title}</span>
        <br />
        <span className="inline-block w-full text-right">{hero.subTitle}</span>
      </h1>
    </Section>
  )
}
