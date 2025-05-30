"use client"

import { useLenis } from "lenis/react"
import Section from "./section"
import { MagneticButton } from "./magnetic"
import { useTranslations } from "next-intl"

export default function EndNote() {
  const lenis = useLenis()
  const t = useTranslations("EndNote")

  return (
    <Section>
      <div className="text-center flex flex-col items-center">
        <h2 className="text-xl sm:text-[3rem] lg:text-[4rem] mb-5 sm:mb-[0.625em]">
          {t("heading")}
        </h2>

        <MagneticButton onClick={() => lenis?.scrollTo("top")}>
          {t("btnText")}
        </MagneticButton>
      </div>
    </Section>
  )
}
