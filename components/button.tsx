export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={
        "text-xl px-[2.5rem] py-[1.25rem] w-fit rounded-[0.25rem] border border-border cursor-pointer"
      }
    >
      {children}
    </button>
  )
}
