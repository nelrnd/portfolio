interface AboutProps {
  about: string
}

export default function About({ about }: AboutProps) {
  return (
    <section>
      <h2>About Me</h2>
      <p>{about}</p>
    </section>
  )
}
