import { usePathname, useRouter } from "@/i18n/navigation"
import clsx from "clsx"
import { Locale } from "next-intl"
import { useParams } from "next/navigation"
import { ChangeEvent, useTransition } from "react"

type Props = {
  children: React.ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }

  return (
    <label
      className={clsx(
        "relative text-soft",
        isPending &&
          "transition-opacity [&:disabled]:opacity-50 [&:disabled]:cursor-wait"
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-3 pr-6 cursor-pointer"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[-4px]">⌄</span>
    </label>
  )
}
