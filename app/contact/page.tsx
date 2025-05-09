import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import Grid from "@/components/grid"
import Section from "@/components/section"
import data from "@/data.json"

export default async function Page() {
  const { contact } = data

  return (
    <main>
      <Section>
        <h1>{contact.title}</h1>
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
