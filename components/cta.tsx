import data from "@/data.json"
import Section from "./section"
import Link from "next/link"

export default async function CTA() {
  const { cta } = data
  return (
    <Section>
      <div className="flex justify-between items-center gap-8">
        <p className="text-leading">{cta.text}</p>
        <Link href={cta.url} className="btn">
          {cta.buttonText}
        </Link>
      </div>
    </Section>
  )
}
