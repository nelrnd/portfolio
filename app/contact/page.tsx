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
        <h1 className="text-center text-[2rem] md:text-[4rem] lg:text-[6rem] leading-[120%] max-w-[900px] m-auto">
          {contact.title}
        </h1>
      </Section>
      <Section>
        <Grid className="grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </Grid>
      </Section>
    </main>
  )
}
