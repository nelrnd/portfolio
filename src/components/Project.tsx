import { Project as ProjectType } from "../types"

interface ProjectProps {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <article>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <ul>
        <li>
          <a href={project.live}>Website</a>
        </li>
        <li>
          <a href={project.code}>Code</a>
        </li>
      </ul>
    </article>
  )
}
