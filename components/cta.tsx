import Section from "./section"
import { MagneticLink } from "./magnetic"
import GradientBackground from "./gradient-background"
import { useTranslations } from "next-intl"
import RichText from "./rich-text"

export default function CTA() {
  const t = useTranslations("CTA")

  return (
    <Section>
      <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden shadow shadow-soft/20 flex items-center">
        <div className="relative z-10 p-8 md:p-16 space-y-8">
          <h2 className="text-xl md:text-4xl leading-[130%]">
            <RichText>{(tags) => t.rich("heading", tags)}</RichText>
          </h2>
          <MagneticLink href={t("href")} className="w-fit">
            {t("btnText")}
          </MagneticLink>
        </div>
        <GradientBackground className="scale-200" />
      </div>
    </Section>
  )
}
