"use client"

import { useEffect } from "react"
import { Gradient } from "@/gradient"
import { cn } from "@/lib/utils"

export default function GradientBackground({
  className,
}: {
  className?: string
}) {
  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient("#gradient-canvas")
  }, [])

  return (
    <canvas
      id="gradient-canvas"
      data-transition-in
      className={cn("absolute top-0 left-0 w-full h-full", className)}
    />
  )
}
