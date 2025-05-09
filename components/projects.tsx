import Grid from "./grid"
import ProjectCard from "./project-card"
import Section from "./section"
import data from "@/data.json"

export default async function Projects() {
  const { projectsSectionTitle, projects } = data

  return (
    <Section>
      <h2 className="mb-6">{projectsSectionTitle}</h2>

      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Grid>
    </Section>
  )
}
