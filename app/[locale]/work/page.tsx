import AnimatedHeading from "@/components/animated-heading"
import { ProjectList } from "@/components/project"
import Section from "@/components/section"
import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { use } from "react"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Pages" })
  return {
    title: t("work.name"),
  }
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
