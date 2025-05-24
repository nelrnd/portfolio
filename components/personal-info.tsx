import Image from "next/image"
import Button from "./button"
import Clock from "./clock"
import Section from "./section"
import data from "@/data.json"
import Grid from "./grid"

export default function PersonalInfo() {
  const { location, timezone, status } = data.personalInfo
  return (
    <Section>
      <Grid className="sm:grid-cols-2 bg-background border border-border rounded-2xl px-8 py-12 sm:p-[3.125rem] overflow-hidden">
        <div className="space-y-8 sm:space-y-16">
          <div>
            <h4 className="uppercase text-soft text-xs lg:text-base mb-1">
              Current Location
            </h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              {location}
            </p>
          </div>
          <div>
            <h4 className="uppercase text-soft text-xs lg:text-base mb-1">
              Local Time
            </h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              <Clock timezone={timezone} />
            </p>
          </div>
          <div>
            <h4 className="uppercase text-soft text-xs lg:text-base mb-1">
              Status
            </h4>
            <p className="text-xl sm:text-[1.875rem] lg:text-[2.5rem] leading-none">
              {status}
            </p>
          </div>
          <Button>Start</Button>
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
