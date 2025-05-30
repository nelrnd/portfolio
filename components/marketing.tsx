"use client"

import { formatText } from "@/lib/utils"
import Section from "./section"
import data from "@/data.json"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"
import RichText from "./rich-text"

export default function Marketing() {
  const { stance, results } = data.marketing

  const t = useTranslations("Marketing")

  return (
    <Section className="overflow-hidden">
      <div className="mb-[2rem] sm:mb-[4rem]">
        <p className="sm:text-2xl lg:text-[2.5rem] leading-[170%]">
          <RichText>{(tags) => t.rich("stance", tags)}</RichText>
        </p>
      </div>
      <div>
        <h2 className="sm:text-2xl lg:text-[2.5rem] leading-[170%] mb-[1.5rem] sm:mb-[3rem]">
          {t("results.heading")}
        </h2>

        <div className="flex flex-col gap-8">
          {["1", "2", "3"].map((key, id) => (
            <Result key={key} isEven={id % 2 === 0}>
              {t(`results.content.${key}`)}
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
      opacity: 0,
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
        className="relative group-even:ml-auto z-10 p-8 sm:text-2xl lg:text-[2.5rem] leading-[170%] border border-border sm:w-[80vw] lg:w-[60vw] lg:min-h-[400px] flex items-end"
      >
        <p className="sm:w-5/6">{children}</p>
      </div>
    </div>
  )
}
