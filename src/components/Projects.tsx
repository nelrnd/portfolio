import { Project as ProjectType } from "../types"
import Project from "./Project"

interface ProjectsProps {
  projects: ProjectType[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </section>
  )
}
