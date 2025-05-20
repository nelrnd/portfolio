import CTA from "@/components/cta"
import Grid from "@/components/grid"
import Section from "@/components/section"
import Tag from "@/components/tag"
import data from "@/data.json"
import { Project } from "@/lib/definitions"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = data.projects.content.find((project) => project.slug === slug)
  return {
    title: project?.title,
    description: project?.desc,
    keywords: project?.tags,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const index = data.projects.content.findIndex(
    (project) => project.slug === slug
  )
  const project = data.projects.content[index]
  const nextIndex = index + 1 < data.projects.content.length ? index + 1 : 0
  const nextProject = data.projects.content[nextIndex]

  if (!project) return <p>Project not found</p>

  return (
    <main>
      <ProjectInfo project={project} />
      <ProjectImage />
      <ProjectDescription desc={project.desc} />
      <ProjectImage />
      <ProjectImage />
      <ProjectNext nextProject={nextProject} />
      <CTA />
    </main>
  )
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <Section containerClassName="py-16">
      <Grid className="md:grid-cols-[1fr_auto] gap-y-8">
        <div>
          <h1 className="text-[3rem] md:text-[8rem] leading-[120%]">
            {project.title}
          </h1>
          <p className="text-leading mb-4">{project.subTitle}</p>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {project.tags.map((tag) => (
              <Tag key={tag} content={tag} />
            ))}
          </div>
        </div>
        <Grid className="grid-cols-2 md:grid-cols-1 gap-8">
          <div>
            <p className="title mb-2">Year</p>
            <p>{project.year}</p>
          </div>
          <div>
            <p className="title mb-2">Roles</p>
            <ul className="space-y-1">
              {project.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid className="grid-cols-2 mt-8">
        <Link
          href={project.links.website}
          target="_blank"
          className="btn btn-primary"
        >
          Website
        </Link>
        <Link
          href={project.links.code}
          target="_blank"
          className="btn btn-secondary"
        >
          Code
        </Link>
      </Grid>
    </Section>
  )
}

function ProjectImage({ url, alt = "" }: { url?: string; alt?: string }) {
  return (
    <Section>
      <div className="bg-gray-200 aspect-[4/3]"></div>

      {url && <Image src={url} alt={alt} fill />}
    </Section>
  )
}

function ProjectDescription({ desc }: { desc: string }) {
  return (
    <Section>
      <p className="lg:text-[2.5rem] leading-[170%]">{desc}</p>
    </Section>
  )
}

function ProjectNext({ nextProject }: { nextProject: Project }) {
  return (
    <Section>
      <Link
        href={`/work/${nextProject.slug}`}
        className="text-[1.5rem] lg:text-[4rem]"
      >
        Next project
      </Link>
    </Section>
  )
}
