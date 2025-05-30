"use client"

import { useLenis } from "lenis/react"
import { usePathname } from "@/i18n/navigation"
import { useEffect } from "react"

export default function ScrollTop() {
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    lenis?.stop()
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      lenis?.start()
    }, 10)
  }, [pathname, lenis])

  return null
}
