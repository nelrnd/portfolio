import data from "@/data.json"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import WaveText from "./wave-text"

export default function ContactInfo() {
  const t = useTranslations("Contact")
  const { contact, socials } = data

  return (
    <div className="space-y-8 md:space-y-12">
      <div>
        <h3 className="title mb-2">{t("contactDetails")}</h3>
        <div className="md:text-2xl">
          <Link href={`mailto:${contact.email}`}>
            <WaveText text={contact.email} />
          </Link>
        </div>
      </div>
      <div>
        <h3 className="title mb-2">{t("socials")}</h3>
        <ul className="space-y-2 md:space-y-3">
          {socials.map((social) => (
            <li key={social.name} className="md:text-2xl">
              <Link href={social.url} target="_blank">
                <WaveText text={social.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
