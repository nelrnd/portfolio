import About from "@/components/about"
import { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

export const metadata: Metadata = {
  title: "About",
}

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <main>
      <About />
    </main>
  )
}
