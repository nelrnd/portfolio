import { cn } from "@/lib/utils"

export default function Grid({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn("grid gap-4", className)}>{children}</div>
}
