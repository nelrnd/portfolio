"use client"

import { useEffect, useLayoutEffect } from "react"
import { useRef } from "react"
import { cn, distance, lerp } from "@/lib/utils"
import { useMousePos } from "./mouse-pos-provider"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"

export default function MagneticButton({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const elRef = useRef<HTMLButtonElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const textInnerRef = useRef<HTMLSpanElement>(null)
  const mousePosRef = useMousePos()
  const animationIdRef = useRef<number>(null)

  const renderedStyles = useRef({
    tx: { previous: 0, current: 0, amt: 0.2 },
    ty: { previous: 0, current: 0, amt: 0.2 },
  })
  const state = useRef({ hover: false })
  const rect = useRef<DOMRect>(null)
  const distanceToTrigger = useRef<number>(null)

  const calculateSizePosition = () => {
    rect.current = elRef.current?.getBoundingClientRect() || null
    if (rect.current) {
      distanceToTrigger.current = rect.current?.width * 0.7
    }
  }

  const render = () => {
    if (!rect.current || !distanceToTrigger.current) return
    const distanceMouseButton = distance(
      mousePosRef.x + window.scrollX,
      mousePosRef.y + window.scrollY,
      rect.current.left + rect.current.width / 2,
      rect.current.top + rect.current.height / 2
    )

    let x = 0
    let y = 0

    if (distanceMouseButton < distanceToTrigger.current) {
      if (!state.current.hover) {
        // enter()
        console.log()
      }
      x =
        (mousePosRef.x +
          window.scrollX -
          (rect.current.left + rect.current.width / 2)) *
        0.3
      y =
        (mousePosRef.y +
          window.scrollY -
          (rect.current.top + rect.current.height / 2)) *
        0.3
    } else if (state.current.hover) {
      // leave()
      console.log()
    }

    renderedStyles.current.tx.current = x
    renderedStyles.current.ty.current = y

    for (const key in renderedStyles.current) {
      const typedKey = key as keyof typeof renderedStyles.current
      renderedStyles.current[typedKey].previous = lerp(
        renderedStyles.current[typedKey].previous,
        renderedStyles.current[typedKey].current,
        renderedStyles.current[typedKey].amt
      )
    }

    if (elRef.current) {
      elRef.current.style.transform = `translate3d(${renderedStyles.current["tx"].previous}px, ${renderedStyles.current["ty"].previous}px, 0)`
    }
    if (textRef.current) {
      textRef.current.style.transform = `translate3d(${-renderedStyles.current["tx"].previous * 0.6}px, ${-renderedStyles.current["ty"].previous * 0.6}px, 0)`
    }

    animationIdRef.current = requestAnimationFrame(render)
  }

  useEffect(() => {
    window.addEventListener("resize", calculateSizePosition)
    return () => window.removeEventListener("resize", calculateSizePosition)
  }, [])

  useLayoutEffect(() => {
    calculateSizePosition()
    animationIdRef.current = requestAnimationFrame(render)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  const splitInstancesRef = useRef<{ text?: SplitText; subText?: SplitText }>(
    {}
  )

  const { contextSafe } = useGSAP(() => {
    document.fonts.ready.then(() => {
      if (!textInnerRef.current) return
      const text = textInnerRef.current.firstElementChild as HTMLElement
      const subtext = textInnerRef.current.lastElementChild as HTMLElement

      if (text && subtext) {
        splitInstancesRef.current.text = SplitText.create(text, {
          type: "chars",
        })
        splitInstancesRef.current.subText = SplitText.create(subtext, {
          type: "chars",
        })
      }
    })
  })

  const handleMouseEnter = contextSafe(() => {
    const { text, subText } = splitInstancesRef.current
    if (!text || !subText) return
    gsap.to(text.chars, { yPercent: -100, stagger: 0.02 })
    gsap.to(subText.chars, { yPercent: -100, stagger: 0.02 })
  })

  const handleMouseLeave = contextSafe(() => {
    const { text, subText } = splitInstancesRef.current
    if (!text || !subText) return
    gsap.to(text.chars, { yPercent: 0, stagger: 0.02 })
    gsap.to(subText.chars, { yPercent: 0, stagger: 0.02 })
  })

  return (
    <button
      className={cn(
        "cursor-pointer appearance-none border border-border hover:border-foreground bg-background text-foreground rounded group active:scale-95 will-change-transform h-20 min-w-48 m-4 text-2xl overflow-hidden flex items-center justify-center",
        className
      )}
      {...props}
      ref={elRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="flex items-center justify-center w-full h-full group-active:scale-105 will-change-transform"
        ref={textRef}
      >
        <span
          className="uppercase flex items-center justify-center w-fit h-fit relative overflow-hidden"
          ref={textInnerRef}
        >
          <span>{children}</span>
          <span
            aria-hidden
            className="absolute top-[100%] select-none pointer-events-none"
          >
            {children}
          </span>
        </span>
      </span>
    </button>
  )
}
