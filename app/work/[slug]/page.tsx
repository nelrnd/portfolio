import Grid from "@/components/grid"
import Section from "@/components/section"
import Tag from "@/components/tag"
import data from "@/data.json"
import { Project } from "@/lib/definitions"
import { ArrowUpIcon, ChevronRightIcon } from "@heroicons/react/16/solid"
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
      <ProjectImage />
      <ProjectInfo project={project} />
      <ProjectDescription desc={project.desc} />
      <ProjectImage />
      <ProjectImage />
      <ProjectNext nextProject={nextProject} />
    </main>
  )
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <Section as="header" className="py-4 sm:py-8 lg:py-8">
      <Grid className="gap-6 sm:grid-cols-12 items-start">
        <div className="sm:col-span-8 lg:col-span-9">
          <h1 className="text-[2rem] sm:text-[5rem] lg:text-[8rem] leading-[120%] mb-1">
            {project.title}
          </h1>
          <p>{project.subTitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 sm:gap-y-3 sm:col-span-4 lg:col-span-6">
          {project.tags.map((tag) => (
            <Tag key={tag} content={tag} />
          ))}
        </div>
        <Grid className="grid-cols-2 sm:col-span-8 lg:col-span-6">
          <div>
            <h3 className="title mb-3">Year</h3>
            <p>{project.year}</p>
          </div>
          <div>
            <h3 className="title mb-3">Roles</h3>
            <ul>
              {project.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </Grid>

        <div className="flex flex-col gap-3 sm:row-start-1 sm:col-span-4 sm:-col-start-5 lg:col-span-3 lg:-col-start-4 sm:self-center">
          <Link
            href={project.links.website}
            target="_blank"
            className="btn btn-primary"
          >
            <span className="flex-1">Website</span>
            <ArrowUpIcon className="size-[1em] rotate-45" />
          </Link>
          <Link
            href={project.links.code}
            target="_blank"
            className="btn btn-secondary"
          >
            <span className="flex-1">Code</span>
            <ArrowUpIcon className="size-[1em] rotate-45" />
          </Link>
        </div>
      </Grid>
    </Section>
  )
}

function ProjectImage({ url, alt = "" }: { url?: string; alt?: string }) {
  return (
    <Section className="py-4 sm:py-8 lg:py-8">
      <div className="bg-gray-200 aspect-[16/9]"></div>

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
        className="btn btn-secondary btn-large w-fit m-auto"
      >
        Next work
        <ChevronRightIcon className="size-[0.75em]" />
      </Link>
    </Section>
  )
}
