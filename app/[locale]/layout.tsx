import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "@/app/globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ReactLenis from "lenis/react"
import gsap from "gsap"
import ScrollTop from "@/components/scroll-top"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import MousePosProvider from "@/components/mouse-pos-provider"
import { setRequestLocale } from "next-intl/server"

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <ReactLenis root>
      <html lang={locale}>
        <body className={`${spaceGrotesk.className} antialiased`}>
          <NextIntlClientProvider>
            <MousePosProvider>
              <div className="relative z-10">
                <Navbar />
                {children}
                <Footer />
              </div>
            </MousePosProvider>
          </NextIntlClientProvider>
        </body>
      </html>
      <ScrollTop />
    </ReactLenis>
  )
}
