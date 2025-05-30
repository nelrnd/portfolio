import About from "@/components/about"
import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { use } from "react"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Pages" })
  return {
    title: t("about.name"),
  }
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
