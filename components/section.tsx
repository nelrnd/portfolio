import { cn } from "@/lib/utils"

export default function Section({
  as,
  className,
  containerClassName,
  children,
}: {
  as?: React.ElementType
  className?: string
  containerClassName?: string
  children: React.ReactNode
}) {
  const Comp = as || "section"
  return (
    <Comp className={cn("", className)}>
      <div className={cn("", containerClassName)}>{children}</div>
    </Comp>
  )
}
