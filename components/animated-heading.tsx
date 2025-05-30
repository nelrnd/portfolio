"use client"

import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react"

export default function AnimatedHeading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const heading = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const split = SplitText.create(heading.current, {
        type: "chars",
        mask: "chars",
      })

      gsap.from(split.chars, {
        y: 200,
        duration: 1,
        ease: "power4.out",
        stagger: 0.025,
      })
    })
  }, {})

  return (
    <h1 className={cn("headline mb-12", className)} ref={heading}>
      {children}
    </h1>
  )
}
