"use client"

import data from "@/data.json"
import Section from "./section"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"

export default function Hero() {
  useGSAP(() => {
    const split = SplitText.create(".split", { type: "words", mask: "words" })

    gsap.from(split.words, {
      duration: 0.4,
      y: 200,
      opacity: 0,
      stagger: 0.15,
    })
  })

  const { hero } = data

  return (
    <Section>
      <h1 className="text-xxl space-y-6 split">
        <span className="inline-block">{hero.title}</span>
        <span className="inline-block w-full text-right">{hero.subTitle}</span>
      </h1>
    </Section>
  )
}
