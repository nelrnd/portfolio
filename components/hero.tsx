"use client"

import data from "@/data.json"
import Section from "./section"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"
import { useRef } from "react"

export default function Hero() {
  const { hero } = data
  const container = useRef<HTMLElement>(null)
  const tl = useRef<GSAPTimeline>(null)

  useGSAP(
    () => {
      const line1Split = SplitText.create(".line-1", {
        type: "words",
        mask: "words",
      })
      const line2Split = SplitText.create(".line-2", {
        type: "words",
        mask: "words",
      })

      tl.current = gsap
        .timeline()
        .to(container.current, { opacity: 100, duration: 0 })
        .from(line1Split.words, {
          duration: 0.6,
          y: 200,
          opacity: 0,
          stagger: 0.15,
          ease: "power1.out",
        })
        .from(line2Split.words, {
          duration: 0.6,
          y: 200,
          opacity: 0,
          stagger: 0.15,
          ease: "power1.out",
        })
    },
    { scope: container }
  )

  return (
    <Section ref={container} className="opacity-0">
      <h1 className="hero-text space-y-6">
        <span className="inline-block line-1">{hero.title}</span>
        <span className="inline-block w-full text-right line-2">
          {hero.subTitle}
        </span>
      </h1>
    </Section>
  )
}
