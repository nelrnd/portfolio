type Tag = "strong" | "em" | "br"

type Props = {
  children(
    tags: Record<Tag, (chunks: React.ReactNode) => React.ReactNode>
  ): React.ReactNode
}

export default function RichText({ children }: Props) {
  return (
    <>
      {children({
        strong: (chunks: React.ReactNode) => (
          <strong className="font-bold">{chunks}</strong>
        ),
        em: (chunks: React.ReactNode) => <em className="italic">{chunks}</em>,
        br: () => <br></br>,
      })}
    </>
  )
}
