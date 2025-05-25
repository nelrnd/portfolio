import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ReactLenis from "lenis/react"
import gsap from "gsap"
import ScrollTop from "@/components/scroll-top"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Nelson Renaudin",
    default: "Nelson Renaudin | Freelance Web Developer",
  },
  description: "Portfolio of Nelson Renaudin, Full-stack web developer",
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={`${spaceGrotesk.className} antialiased`}>
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
            <ScrollTop />
          </div>
        </body>
      </html>
    </ReactLenis>
  )
}
