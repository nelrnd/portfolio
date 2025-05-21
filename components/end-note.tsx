"use client"

import Button from "./button"
import Section from "./section"

export default function EndNote() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-xl sm:text-[3rem] lg:text-[4rem] mb-5 sm:mb-[0.625em]">
          Thank’s for the visit! ✌️
        </h2>
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Scroll back to top
        </Button>
      </div>
    </Section>
  )
}
