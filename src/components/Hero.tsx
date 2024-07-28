interface HeroProps {
  hero: {
    heading: string
  }
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section>
      <h1 style={{ whiteSpace: "pre-line" }}>{hero.heading}</h1>
    </section>
  )
}
