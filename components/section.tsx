import { cn } from "@/lib/utils"

export default function Section({
  as,
  className,
  containerClassName,
  children,
  ref,
}: {
  as?: React.ElementType
  className?: string
  containerClassName?: string
  ref?: React.Ref<HTMLElement>
  children: React.ReactNode
}) {
  const Comp = as || "section"
  return (
    <Comp
      className={cn("px-4 sm:px-8 py-12 sm:py-24 lg:py-32 ", className)}
      ref={ref}
    >
      <div className={cn("max-w-container m-auto", containerClassName)}>
        {children}
      </div>
    </Comp>
  )
}
