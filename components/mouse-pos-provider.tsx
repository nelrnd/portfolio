"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"

const MousePosContext = createContext({ x: 0, y: 0 })

export default function MousePosProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mousePos.current.x = event.clientX
      mousePos.current.y = event.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <MousePosContext.Provider value={mousePos.current}>
      {children}
    </MousePosContext.Provider>
  )
}

export function useMousePos() {
  return useContext(MousePosContext)
}
