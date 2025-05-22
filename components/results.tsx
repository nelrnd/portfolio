import Section from "./section"
import data from "@/data.json"

export default function Results() {
  const { title, content } = data.results

  return (
    <Section className="pt-0 sm:pt-0 lg:pt-0">
      <p className="text-[2.5rem] mb-[3.125rem]">{title}</p>
      <div>
        {content.map((result, id) => (
          <div
            key={id}
            className="text-[2.5rem] w-4/5 h-[400px] p-[2.5rem] border border-[#120048] mr-[2.5rem] mb-[2.5rem] flex items-end"
          >
            {result}
          </div>
        ))}
      </div>
    </Section>
  )
}
