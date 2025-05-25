"use client"

import { formatText } from "@/lib/utils"
import Section from "./section"
import data from "@/data.json"
import GradientBackground from "./gradient-background"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Marketing() {
  const { stance, results } = data.marketing

  return (
    <Section>
      <div className="mb-[2rem] sm:mb-[4rem]">
        <p className="sm:text-2xl lg:text-[2.5rem] leading-[170%]">
          {formatText(stance)}
        </p>
      </div>
      <div>
        <h2 className="sm:text-2xl lg:text-[2.5rem] leading-[170%] mb-[1.5rem] sm:mb-[3rem]">
          {results.title}
        </h2>

        <div className="flex flex-col gap-8">
          {results.content.map((result, id) => (
            <Result key={id} isEven={id % 2 === 0}>
              {result}
            </Result>
          ))}
        </div>
      </div>
    </Section>
  )
}

gsap.registerPlugin(ScrollTrigger)

function Result({
  isEven,
  children,
}: {
  isEven: boolean
  children: React.ReactNode
}) {
  const container = useRef(null)
  const card = useRef(null)

  useGSAP(() => {
    gsap.from(card.current, {
      x: isEven ? 200 : -200,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    })
  }, {})

  return (
    <div className="group" ref={container}>
      <div
        ref={card}
        className="relative group-even:ml-auto z-10 p-8 sm:text-2xl lg:text-[2.5rem] leading-[170%] border border-border w-[60vw] sm:h-[400px] flex items-end"
      >
        <p className="w-5/6">{children}</p>
      </div>
    </div>
  )
}
