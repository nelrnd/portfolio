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
    <Section>
      <Grid className="grid-cols-[1fr_auto]">
        <div>
          <h1 className="text-8x leading-none">{project.title}</h1>
          <p className="text-leading mb-4">{project.subTitle}</p>
          <div className="flex items-center gap-3">
            {project.tags.map((tag) => (
              <Tag key={tag} content={tag} />
            ))}
          </div>
        </div>
        <div>
          <div>
            <p>Year</p>
            <p>{project.year}</p>
          </div>
          <div>
            <p>Roles</p>
            <ul>
              {project.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
      <Grid className="grid-cols-2">
        <Link href={project.urls.live} target="_blank">
          Website
        </Link>
        <Link href={project.urls.code} target="_blank">
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
      <p>{desc}</p>
    </Section>
  )
}

function ProjectNext({ nextProject }: { nextProject: Project }) {
  return (
    <Section>
      <Link href={`/work/${nextProject.slug}`}>Next project</Link>
    </Section>
  )
}
