import data from "@/data.json"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function ContactInfo() {
  const t = useTranslations("Contact")
  const { contact, socials } = data

  return (
    <div className="space-y-8 md:space-y-12">
      <div>
        <h3 className="title mb-2 md:text-xl">{t("contactDetails")}</h3>
        <p className="md:text-4xl">
          <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
        </p>
      </div>
      <div>
        <h3 className="title mb-2 md:text-xl">{t("socials")}</h3>
        <ul className="space-y-2 md:space-y-6">
          {socials.map((social) => (
            <li key={social.name} className="md:text-4xl">
              <Link href={social.url} target="_blank">
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
