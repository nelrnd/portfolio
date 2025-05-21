"use client"

import Button from "./button"
import Section from "./section"

export default function EndNote() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-[4rem] mb-[2.5rem]">Thank’s for the visit! ✌️</h2>
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Scroll back to top
        </Button>
      </div>
    </Section>
  )
}
