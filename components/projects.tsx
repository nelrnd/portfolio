import Grid from "./grid"
import ProjectCard from "./project-card"
import Section from "./section"
import data from "@/data.json"

export default async function Projects() {
  const { projectsSectionTitle, projects } = data

  return (
    <Section>
      <h2>{projectsSectionTitle}</h2>

      <Grid className="grid-rows-[500px]">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Grid>
    </Section>
  )
}
