import { formatText } from "@/lib/utils"
import Section from "./section"
import data from "@/data.json"
import GradientBackground from "./gradient-background"

export default function Marketing() {
  const { stance, results } = data.marketing

  return (
    <Section>
      <div className="mb-[2rem] sm:mb-[4rem]">
        <p className="sm:text-2xl lg:text-[2.5rem] leading-[170%]">
          {formatText(stance)}
        </p>
      </div>
      <div>
        <h2 className="sm:text-2xl lg:text-[2.5rem] leading-[170%] mb-[1.5rem] sm:mb-[3rem]">
          {results.title}
        </h2>

        <div className="overflow-hidden relative">
          <div className="flex gap-8 w-[10000px]">
            {results.content.map((result, id) => (
              <div
                key={id}
                className="relative z-10 p-8 sm:text-2xl lg:text-[2.5rem] leading-[170%] border border-border w-[60vw] sm:h-[400px] flex items-end"
              >
                <p className="w-5/6">{result}</p>
              </div>
            ))}
          </div>
          <div
            className="absolute inset-0"
            style={{
              mask: `
                ${results.content
                  .map((_, id) => `linear-gradient(white, white)`)
                  .join(", ")}`,
              maskComposite: "add",
              maskPosition: results.content
                .map((_, id) => `0 ${id * (400 + 32)}px`)
                .join(", "),
              maskSize: results.content.map(() => "100% 400px").join(", "),
              maskRepeat: "no-repeat",
            }}
          >
            <GradientBackground />
          </div>
        </div>
      </div>
    </Section>
  )
}
