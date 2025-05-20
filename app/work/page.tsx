import { ProjectList } from "@/components/project"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work",
}

export default async function Page() {
  return (
    <main>
      <ProjectList />
    </main>
  )
}
