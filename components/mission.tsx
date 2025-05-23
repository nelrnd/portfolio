import { formatText } from "@/lib/utils"
import Section from "./section"
import data from "@/data.json"

export default function Mission() {
  const { mission } = data

  return (
    <Section>
      <p className="sm:text-2xl lg:text-[2.5rem] leading-[170%]">
        {formatText(mission)}
      </p>
    </Section>
  )
}
