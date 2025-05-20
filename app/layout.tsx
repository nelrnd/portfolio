import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GradientBackground from "@/components/gradient-background"
import ReactLenis from "lenis/react"
import gsap from "gsap"

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
  gsap.registerPlugin(SplitText)
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
          </div>
          <GradientBackground />
        </body>
      </html>
    </ReactLenis>
  )
}
