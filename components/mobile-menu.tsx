"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import data from "@/data.json"
import Link from "next/link"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setOpen((prevOpen) => !prevOpen)
  }

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="cursor-pointer relative z-50 size-8"
      >
        <MenuIcon open={open} />
      </button>

      <MenuSheet open={open} closeMenu={() => setOpen(false)} />
    </div>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  const container = useRef<SVGSVGElement>(null)

  useGSAP(
    () => {
      const bars: SVGPathElement[] = gsap.utils.toArray(".bar")

      gsap.to(bars[0], {
        y: open ? 4 : 0,
        rotate: open ? -45 : 0,
        transformOrigin: "50% 50%",
        duration: 0.3,
      })
      gsap.to(bars[1], {
        y: open ? -4 : 0,
        rotate: open ? 45 : 0,
        transformOrigin: "50% 50%",
        duration: 0.3,
      })
    },
    { dependencies: [open], scope: container }
  )

  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={container}
    >
      <path d="M28 11V13H4V11H28Z" fill="white" className="bar" />
      <path d="M28 19V21H4V19H28Z" fill="white" className="bar" />
    </svg>
  )
}

function MenuSheet({
  open,
  closeMenu,
}: {
  open: boolean
  closeMenu: () => void
}) {
  const { pages } = data
  const sheetRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(sheetRef.current, { xPercent: open ? -100 : 0, duration: 0.4 })
  }, [open])

  return (
    <div
      ref={sheetRef}
      className="fixed z-40 top-0 left-0 w-full h-full bg-background/80 backdrop-blur-2xl translate-x-full"
    >
      <nav className="p-16 pt-32">
        <ul className="space-y-8">
          {pages.map((page) => (
            <li key={page.name}>
              <Link
                onClick={closeMenu}
                href={page.url}
                className="text-2xl uppercase p-1"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
