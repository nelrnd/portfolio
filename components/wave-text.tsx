"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useEffect, useRef } from "react"

interface WaveTextProps {
  text: string
}

export default function WaveText({ text }: WaveTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const splitInstancesRef = useRef<{ text?: SplitText; subtext?: SplitText }>(
    {}
  )

  const { contextSafe } = useGSAP(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      const text = containerRef.current.firstElementChild as HTMLElement
      const subtext = containerRef.current.lastElementChild as HTMLElement

      if (text && subtext) {
        splitInstancesRef.current.text = SplitText.create(text, {
          type: "chars",
        })
        splitInstancesRef.current.subtext = SplitText.create(subtext, {
          type: "chars",
        })
      }
    })
  })

  const handleMouseEnter = contextSafe(() => {
    const { text, subtext } = splitInstancesRef.current
    if (!text || !subtext) return
    gsap.to(text.chars, { yPercent: -100, stagger: 0.01 })
    gsap.to(subtext.chars, { yPercent: -100, stagger: 0.01 })
  })

  const handleMouseLeave = contextSafe(() => {
    const { text, subtext } = splitInstancesRef.current
    if (!text || !subtext) return
    gsap.to(text.chars, { yPercent: 0, stagger: 0.01 })
    gsap.to(subtext.chars, { yPercent: 0, stagger: 0.01 })
  })

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-fit p-1"
    >
      <div ref={containerRef} className="w-fit relative overflow-hidden">
        <p className="w-fit">{text}</p>
        <p
          aria-hidden
          className="w-fit absolute select-none pointer-events-none"
        >
          {text}
        </p>
      </div>
    </div>
  )
}
