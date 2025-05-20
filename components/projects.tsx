import Grid from "./grid"
import ProjectCard from "./project-card"
import Section from "./section"
import data from "@/data.json"

export default async function Projects() {
  const { projects } = data

  return (
    <Section>
      <h2 className="mb-6">{projects.title}</h2>

      <Grid>
        {projects.content.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Grid>
    </Section>
  )
}
