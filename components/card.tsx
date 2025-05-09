import { cn } from "@/lib/utils"

export default function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn("border p-8", className)}>{children}</div>
}
