import Image from "next/image"
import Clock from "./clock"
import Section from "./section"
import data from "@/data.json"
import Grid from "./grid"
import { MagneticLink } from "./magnetic"
import { useTranslations } from "next-intl"

export default function PersonalInfo() {
  const { timezone } = data.personalInfo
  const t = useTranslations("PersonalInfo")

  return (
    <Section>
      <Grid className="sm:grid-cols-2 bg-background border border-border rounded-2xl px-8 py-12 sm:p-[3.125rem] overflow-hidden">
        <div className="space-y-8 sm:space-y-16">
          <div>
            <h4 className="uppercase text-xs md:text-base text-soft mb-1">
              {t("labels.location")}
            </h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              {t("data.location")}
            </p>
          </div>
          <div>
            <h4 className="uppercase text-xs md:text-base text-soft mb-1">
              {t("labels.time")}
            </h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              <Clock timezone={timezone} />
            </p>
          </div>
          <div>
            <h4 className="uppercase text-xs md:text-base text-soft mb-1">
              {t("labels.availability")}
            </h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              {t("data.availability")}
            </p>
          </div>
          <MagneticLink href="/contact" className="w-fit">
            {t("btnText")}
          </MagneticLink>
        </div>

        <Image
          src="/globe.gif"
          width={500}
          height={500}
          alt="Spinning globe"
          className="animate-spin rounded-full hidden sm:block"
          style={{ animationDuration: "20s" }}
        />
      </Grid>
    </Section>
  )
}
