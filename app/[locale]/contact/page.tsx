import AnimatedHeading from "@/components/animated-heading"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import Grid from "@/components/grid"
import RichText from "@/components/rich-text"
import Section from "@/components/section"
import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"

export const metadata: Metadata = {
  title: "Contact",
}

export default function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations("Contact")

  return (
    <main>
      <Section>
        <AnimatedHeading className="text-center text-[2rem] md:text-[4rem] lg:text-[6rem] leading-[120%] max-w-[900px] m-auto">
          <RichText>{(tags) => t.rich("heading", tags)}</RichText>
        </AnimatedHeading>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Grid className="lg:grid-cols-2 gap-32">
          <ContactForm />
          <ContactInfo />
        </Grid>
      </Section>
    </main>
  )
}
