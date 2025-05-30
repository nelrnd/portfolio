type Tag = "p" | "li" | "strong" | "em" | "br"

type Props = {
  children(
    tags: Record<Tag, (chunks: React.ReactNode) => React.ReactNode>
  ): React.ReactNode
}

export default function RichText({ children }: Props) {
  return (
    <>
      {children({
        p: (chunks: React.ReactNode) => <p>{chunks}</p>,
        li: (chunks: React.ReactNode) => (
          <li key={chunks?.toString()}>{chunks}</li>
        ),
        strong: (chunks: React.ReactNode) => (
          <strong className="font-bold">{chunks}</strong>
        ),
        em: (chunks: React.ReactNode) => <em className="italic">{chunks}</em>,
        br: () => <br></br>,
      })}
    </>
  )
}
