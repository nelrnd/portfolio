import Image from "next/image"
import Clock from "./clock"
import Section from "./section"
import data from "@/data.json"
import Grid from "./grid"
import { MagneticLink } from "./magnetic"

export default function PersonalInfo() {
  const { location, timezone, status } = data.personalInfo
  return (
    <Section>
      <Grid className="sm:grid-cols-2 bg-background border border-border rounded-2xl px-8 py-12 sm:p-[3.125rem] overflow-hidden">
        <div className="space-y-8 sm:space-y-16">
          <div>
            <h4 className="uppercase text-soft mb-1">Currently in</h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              {location}
            </p>
          </div>
          <div>
            <h4 className="uppercase text-soft mb-1">Local time is</h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              <Clock timezone={timezone} />
            </p>
          </div>
          <div>
            <h4 className="uppercase text-soft mb-1">
              AT THE MOMENT, I&apos;M
            </h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              {status}
            </p>
          </div>
          <MagneticLink href="/contact" className="w-fit">
            Get in touch
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
