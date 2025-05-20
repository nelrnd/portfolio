import { formatText } from "@/lib/utils"
import Section from "./section"
import data from "@/data.json"

export default function Mission() {
  const { mission } = data

  return (
    <Section>
      <p className="text-[2.5rem] leading-[160%]">{formatText(mission)}</p>
    </Section>
  )
}
