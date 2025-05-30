"use client"

import { Link } from "@/i18n/navigation"
import data from "@/data.json"
import Section from "./section"
import WaveText from "./wave-text"
import { useGSAP } from "@gsap/react"
import { useCallback, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { usePathname } from "@/i18n/navigation"
import LocaleSwitcher from "./locale-switcher"
import { useTranslations } from "next-intl"

export default function Navbar() {
  const { name } = data
  const t = useTranslations("Pages")

  const elemRef = useRef(null)
  const lastSrollTop = useRef(0)
  const [visible, setVisible] = useState(true)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const onScroll = useCallback(() => {
    if (open) return
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop < 0) return
    if (scrollTop < lastSrollTop.current && visible === false) {
      setVisible(true)
    } else if (scrollTop > lastSrollTop.current && visible === true) {
      setVisible(false)
    }
    lastSrollTop.current = scrollTop
  }, [open, visible, setVisible])

  useGSAP(() => {
    if (visible) {
      gsap.to(elemRef.current, { y: 0 })
    } else {
      gsap.to(elemRef.current, { y: -100 })
    }
  }, [visible])

  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [onScroll])

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 10)
  }, [pathname])

  return (
    <>
      <Section
        as="header"
        className="py-0 sm:py-0 lg:py-0 sticky top-0 z-50 bg-background/50 backdrop-blur-2xl"
        containerClassName="h-[80px] flex items-center justify-center"
        ref={elemRef}
      >
        <nav className="flex-1">
          <ul className="flex items-center gap-8">
            <li className="mr-auto">
              <Link href="/" className="block uppercase text-xl">
                <WaveText text={name} />
              </Link>
            </li>

            <div className="hidden sm:flex items-center gap-8 relative top-[2px]">
              {["1", "2", "3"].map((key, id) => (
                <li key={id}>
                  <Link href={t(`${key}.href`)} className="block uppercase">
                    <WaveText text={t(`${key}.name`)} />
                  </Link>
                </li>
              ))}
              <li>
                <LocaleSwitcher />
              </li>
            </div>

            <div className="block sm:hidden h-8">
              <button
                onClick={toggleOpen}
                className="cursor-pointer relative z-50 size-8"
              >
                <MenuIcon open={open} />
              </button>
            </div>
          </ul>
        </nav>
      </Section>

      <div className="block sm:hidden">
        <MenuSheet open={open} closeMenu={() => setOpen(false)} />
      </div>
    </>
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
  const sheetRef = useRef<HTMLDivElement>(null)
  const t = useTranslations("Pages")

  useGSAP(() => {
    gsap.to(sheetRef.current, {
      x: open ? 0 : "100%",
      duration: 0.4,
      ease: open ? "power1.out" : "power1.in",
    })
  }, [open])

  return (
    <div
      ref={sheetRef}
      className="fixed z-40 top-0 left-0 w-full h-full bg-background backdrop-blur-2xl translate-x-full"
    >
      <nav className="p-16 pt-32 h-full">
        <ul className="space-y-8 h-full flex flex-col">
          {["1", "2", "3"].map((key, id) => (
            <li key={id}>
              <Link
                onClick={closeMenu}
                href={t(`${key}.href`)}
                className="block uppercase text-2xl"
              >
                <WaveText text={t(`${key}.name`)} />
              </Link>
            </li>
          ))}
          <li className="mt-auto">
            <LocaleSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  )
}
