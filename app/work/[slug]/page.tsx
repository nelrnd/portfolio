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
  const project = data.projects.find((project) => project.slug === slug)
  return {
    title: project?.title,
    description: project?.desc,
    keywords: project?.tags,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const index = data.projects.findIndex((project) => project.slug === slug)
  const project = data.projects[index]
  const nextIndex = index + 1 < data.projects.length ? index + 1 : 0
  const nextProject = data.projects[nextIndex]

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
      <Grid className="grid-cols-[1fr_auto]">
        <div>
          <h1 className="text-8x leading-[120%]">{project.title}</h1>
          <p className="text-leading mb-4">{project.subTitle}</p>
          <div className="flex items-center gap-3">
            {project.tags.map((tag) => (
              <Tag key={tag} content={tag} />
            ))}
          </div>
        </div>
        <div className="space-y-8">
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
        </div>
      </Grid>
      <Grid className="grid-cols-2 mt-8">
        <Link
          href={project.urls.live}
          target="_blank"
          className="btn btn-primary"
        >
          Website
        </Link>
        <Link
          href={project.urls.code}
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
      <div className="bg-gray-200 h-[800px]"></div>

      {url && <Image src={url} alt={alt} fill />}
    </Section>
  )
}

function ProjectDescription({ desc }: { desc: string }) {
  return (
    <Section>
      <p className="text-4x leading-[170%] text-justify">{desc}</p>
    </Section>
  )
}

function ProjectNext({ nextProject }: { nextProject: Project }) {
  return (
    <Section>
      <Link href={`/work/${nextProject.slug}`} className="text-4x">
        Next project
      </Link>
    </Section>
  )
}
