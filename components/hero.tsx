"use client"

import Section from "./section"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Hero() {
  const container = useRef<HTMLElement>(null)
  const tl = useRef<GSAPTimeline>(null)

  useGSAP(
    () => {
      const line1Words = gsap.utils.toArray(".line-1 .word")
      const line2Words = gsap.utils.toArray(".line-2 .word")

      tl.current = gsap
        .timeline()
        .to(container.current, { opacity: 100, duration: 0.2 })
        .from(
          line1Words,
          {
            duration: 1,
            y: 200,
            opacity: 0,
            stagger: 0.15,
            ease: "power4.out",
          },
          0
        )
        .from(
          line2Words,
          {
            duration: 1,
            y: 200,
            opacity: 0,
            stagger: 0.15,
            ease: "power4.out",
          },
          0.3
        )
    },
    { scope: container }
  )

  return (
    <Section ref={container} className="opacity-0">
      <h1 className="hero-text space-y-[0.1875em]">
        <div className="block line-1" aria-label="Hi, I'm Nelson">
          <div
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "clip",
            }}
          >
            <div className="inline-block word" aria-hidden>
              Hi,
            </div>{" "}
            <div className="inline-block word" aria-hidden>
              I'm
            </div>{" "}
            <div className="inline-block word" aria-hidden>
              N<ESymbol />
              lson
            </div>
          </div>
        </div>
        <div
          className="inline-block w-full text-right line-2"
          aria-label="I build websites"
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "clip",
            }}
          >
            <div className="inline-block word" aria-hidden>
              I
            </div>{" "}
            <div className="inline-block word" aria-hidden>
              build
            </div>{" "}
            <div className="inline-block word" aria-hidden>
              w<ESymbol />
              bsites
            </div>
          </div>
        </div>
      </h1>
    </Section>
  )
}

function ESymbol() {
  return (
    <svg
      width={58}
      height={64}
      viewBox="0 0 58 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block size-[0.5em]"
    >
      <path
        d="M31.62 2.976c-10.416 0-19.964 19.468-19.964 37.572 0 10.168 4.588 17.732 14.384 17.732 9.052 0 20.708-6.572 30.628-16.12l.496.248v3.1C46.004 55.428 31.62 63.86 19.84 63.86 6.572 63.86 0 55.552 0 41.664 0 23.684 13.888 0 33.852 0c6.944 0 13.516 2.852 13.516 10.168 0 11.16-18.6 20.584-32.364 24.552l-.372-1.488c9.424-4.836 22.32-13.888 22.32-24.304 0-3.596-1.364-5.952-5.332-5.952z"
        fill="#fff"
      />
      <path
        d="M31.62 2.976c-10.416 0-19.964 19.468-19.964 37.572 0 10.168 4.588 17.732 14.384 17.732 9.052 0 20.708-6.572 30.628-16.12l.496.248v3.1C46.004 55.428 31.62 63.86 19.84 63.86 6.572 63.86 0 55.552 0 41.664 0 23.684 13.888 0 33.852 0c6.944 0 13.516 2.852 13.516 10.168 0 11.16-18.6 20.584-32.364 24.552l-.372-1.488c9.424-4.836 22.32-13.888 22.32-24.304 0-3.596-1.364-5.952-5.332-5.952z"
        fill="#fff"
      />
    </svg>
  )
}
