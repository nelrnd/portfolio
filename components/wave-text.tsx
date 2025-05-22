"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react"

export default function WaveText({ text }: { text: string }) {
  const textRef = useRef<HTMLDivElement>(null)
  let text1: globalThis.SplitText
  let text2: globalThis.SplitText

  const onMouseEnter = () => {
    gsap.to(text1.chars, { yPercent: -100, stagger: 0.01 })
    gsap.to(text2.chars, { yPercent: -100, stagger: 0.01 })
  }

  const onMouseLeave = () => {
    gsap.to(text1.chars, { yPercent: 0, stagger: 0.01 })
    gsap.to(text2.chars, { yPercent: 0, stagger: 0.01 })
  }

  useGSAP(() => {
    if (textRef.current) {
      text1 = SplitText.create(textRef.current.firstElementChild, {
        type: "chars",
      })
      text2 = SplitText.create(textRef.current.lastElementChild, {
        type: "chars",
      })
    }
  })

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-fit p-1"
    >
      <div ref={textRef} className="w-fit relative overflow-hidden">
        <p className="w-fit">{text}</p>
        <p aria-hidden className="w-fit absolute select-none">
          {text}
        </p>
      </div>
    </div>
  )
}
