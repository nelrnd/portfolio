import Link from "next/link"
import { type Project } from "@/lib/definitions"
import Card from "./card"
import Tag from "./tag"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.slug}`}>
      <Card>
        <p>{project.year}</p>
        <h3>
          {project.title} / {project.subTitle}
        </h3>
        <div>
          {project.tags.map((tag) => (
            <Tag key={tag} content={tag} />
          ))}
        </div>
      </Card>
    </Link>
  )
}
