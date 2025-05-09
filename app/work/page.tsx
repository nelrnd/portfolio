import Projects from "@/components/projects"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work",
}

export default async function Page() {
  return (
    <main>
      <Projects />
    </main>
  )
}
