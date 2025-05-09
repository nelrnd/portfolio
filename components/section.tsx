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
    <Comp className={cn("px-4 md:px-8", className)}>
      <div className={cn("max-w-container m-auto py-32", containerClassName)}>
        {children}
      </div>
    </Comp>
  )
}
