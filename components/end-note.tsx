"use client"

import { useLenis } from "lenis/react"
import Section from "./section"
import { MagneticButton } from "./magnetic"

export default function EndNote() {
  const lenis = useLenis()

  return (
    <Section>
      <div className="text-center flex flex-col items-center">
        <h2 className="text-xl sm:text-[3rem] lg:text-[4rem] mb-5 sm:mb-[0.625em]">
          Thank’s for the visit! ✌️
        </h2>

        <MagneticButton onClick={() => lenis?.scrollTo("top")}>
          Scroll back to top
        </MagneticButton>
      </div>
    </Section>
  )
}
