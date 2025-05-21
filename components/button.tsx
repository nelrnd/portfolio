export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}) {
  return (
    <button
      className={
        "px-8 py-4 sm:text-xl sm:px-[2.5rem] sm:py-[1.25rem] w-fit rounded-[0.25rem] border border-border cursor-pointer"
      }
      {...props}
    >
      {children}
    </button>
  )
}
