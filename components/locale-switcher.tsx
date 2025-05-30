import { useLocale, useTranslations } from "next-intl"
import LocaleSwitcherSelect from "./locale-switcher-select"
import { routing } from "@/i18n/routing"

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((curr) => (
        <option key={curr} value={curr} className="text-border">
          {t("locale", { locale: curr })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
