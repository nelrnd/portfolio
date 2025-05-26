import AnimatedHeading from "@/components/animated-heading"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import Grid from "@/components/grid"
import Section from "@/components/section"
import data from "@/data.json"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
}

export default async function Page() {
  const { contact } = data

  return (
    <main>
      <Section>
        <AnimatedHeading className="text-center text-[2rem] md:text-[4rem] lg:text-[6rem] leading-[120%] max-w-[900px] m-auto">
          Let's start
          <br />
          something
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
