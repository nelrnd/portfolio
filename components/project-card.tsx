import Link from "next/link"
import { type Project } from "@/lib/definitions"
import Card from "./card"
import Tag from "./tag"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`}>
      <Card>
        <p>{project.year}</p>
        <h3 className="text-2x mb-2">
          {project.title} / {project.subTitle}
        </h3>
        <div className="flex items-center gap-3">
          {project.tags.map((tag) => (
            <Tag key={tag} content={tag} />
          ))}
        </div>
      </Card>
    </Link>
  )
}
