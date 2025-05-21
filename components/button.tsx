import { ButtonHTMLAttributes } from "react"

export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}) {
  return (
    <button
      className={
        "text-xl px-[2.5rem] py-[1.25rem] w-fit rounded-[0.25rem] border border-border cursor-pointer"
      }
      {...props}
    >
      {children}
    </button>
  )
}
