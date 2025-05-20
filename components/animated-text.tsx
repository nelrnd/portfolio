"use client"

import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useEffect } from "react"

export default function AnimatedText({ text }: { text: string }) {
  useEffect(() => {
    let split = SplitText.create(".split", { type: "chars" })

    gsap.from(split.chars, {
      duration: 0.6,
      y: 100,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "power4",
    })
  }, [])
  return <h1 className="split text-xxl">{text}</h1>
}
