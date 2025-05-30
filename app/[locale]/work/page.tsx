import AnimatedHeading from "@/components/animated-heading"
import { ProjectList } from "@/components/project"
import Section from "@/components/section"
import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

export const metadata: Metadata = {
  title: "Work",
}

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations("Work")

  return (
    <main>
      <Section>
        <AnimatedHeading>{t("heading")}</AnimatedHeading>
        <ProjectList />
      </Section>
    </main>
  )
}
