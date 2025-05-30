import data from "@/data.json"
import Section from "./section"
import { MagneticLink } from "./magnetic"
import GradientBackground from "./gradient-background"

export default function CTA() {
  const { cta } = data

  return (
    <Section>
      <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden shadow shadow-soft/20 flex items-center">
        <div className="relative z-10 p-8 md:p-16 space-y-8">
          <h2 className="text-xl md:text-4xl leading-[130%]">
            Have a project in mind?
            <br />
            Let&pos;s build something amazing together
          </h2>
          <MagneticLink href={cta.href} className="w-fit">
            {cta.button}
          </MagneticLink>
        </div>
        <GradientBackground className="scale-200" />
      </div>
    </Section>
  )
}
