export default function Tag({ content }: { content: string }) {
  return (
    <div className="text-xs md:text-base px-3 py-2 w-fit border rounded-full">
      {content}
    </div>
  )
}
