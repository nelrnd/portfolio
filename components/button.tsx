import { cn } from "@/lib/utils"

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className: string
  children: React.ReactNode
}) {
  return (
    <button
      className={cn(
        "px-8 py-4 sm:text-xl sm:px-[2.5rem] sm:py-[1.25rem] font-medium w-fit rounded-[0.25rem] border border-border cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
