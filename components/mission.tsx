import { formatText } from "@/lib/utils"
import Section from "./section"
import data from "@/data.json"

export default function Mission() {
  const { mission } = data

  return (
    <Section>
      <p className="hidden sm:block text-2xl lg:text-[2.5rem] leading-[170%]">
        {formatText(mission.large)}
      </p>
      <p className="leading-[170%] sm:hidden">{formatText(mission.small)}</p>
    </Section>
  )
}
