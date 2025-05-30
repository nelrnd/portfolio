import EndNote from "@/components/end-note"
import Hero from "@/components/hero"
import Marketing from "@/components/marketing"
import PersonalInfo from "@/components/personal-info"
import { ProjectList } from "@/components/project"
import Section from "@/components/section"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("HomePage")
  return (
    <main>
      <section>
        <div>
          <h1>{t("title")}</h1>
          <h1>{t("about")}</h1>
        </div>
      </section>
      <Hero />
      <Section>
        <h2 className="text-base mb-[1.875rem] sm:text-[1.875rem] sm:mb-[3.75rem] lg:text-[2.5rem] lg:mb-[5rem]">
          Here&apos;s some of my work
        </h2>
        <ProjectList />
      </Section>
      <Marketing />
      <PersonalInfo />
      <EndNote />
    </main>
  )
}
