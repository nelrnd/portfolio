import type { Project } from "@/lib/definitions"
import Link from "next/link"
import Tag from "./tag"
import data from "@/data.json"
import Section from "./section"
import Grid from "./grid"
import Button from "./button"
import Image from "next/image"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`}>
      <div className="h-[400px] rounded-[2rem] border border-border relative">
        <div className="h-full p-[3.125rem] flex flex-col justify-between">
          <p>{project.year}</p>

          <div className="space-y-5">
            <h3 className="text-[2.5rem]">
              {project.title} / {project.subTitle}
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {project.tags.map((tag) => (
                <Tag key={tag} content={tag} />
              ))}
            </div>
          </div>
        </div>

        <Image
          src={project.thumbnail}
          width={716}
          height={400}
          alt={`${project.title} / ${project.subTitle}`}
          className="absolute bottom-0 right-0 -z-10"
        />
      </div>
    </Link>
  )
}

export function ProjectList() {
  const { title, content } = data.projects

  return (
    <Section>
      <h2 className="text-[2.5rem] mb-[3.75rem]">{title}</h2>

      <Grid className="gap-[3.75rem]">
        {content.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        <div className="w-fit m-auto">
          <Button>Load more</Button>
        </div>
      </Grid>
    </Section>
  )
}
