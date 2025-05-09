"use client"

import { useEffect } from "react"
import { Gradient } from "@/gradient"

export default function GradientBackground() {
  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient("#gradient-canvas")
  }, [])

  return (
    <div className="opacity-50">
      <canvas
        id="gradient-canvas"
        data-transition-in
        className="fixed top-0 left-0 w-full h-full"
      />
    </div>
  )
}
