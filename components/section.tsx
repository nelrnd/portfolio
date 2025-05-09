import { cn } from "@/lib/utils"

export default function Section({
  className,
  containerClassName,
  children,
}: {
  className: string
  containerClassName: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("", className)}>
      <div className={cn("", containerClassName)}>{children}</div>
    </section>
  )
}
