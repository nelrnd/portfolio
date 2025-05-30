import Section from "./section"
import AnimatedHeading from "./animated-heading"
import { useTranslations } from "next-intl"
import RichText from "./rich-text"

export default function About() {
  const t = useTranslations("About")

  return (
    <Section>
      <AnimatedHeading>
        <RichText>{(tags) => t.rich("heading", tags)}</RichText>
      </AnimatedHeading>
      <div className="fluid-copy space-y-4 md:space-y-8">
        <RichText>{(tags) => t.rich("text", tags)}</RichText>
      </div>
    </Section>
  )
}
