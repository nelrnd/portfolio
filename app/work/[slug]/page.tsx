import AnimatedHeading from "@/components/animated-heading"
import Grid from "@/components/grid"
import { MagneticLink } from "@/components/magnetic"
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
      {project.images && project.images.length > 0 && (
        <Section className="py-4 sm:py-8 lg:py-8">
          <div
            className="p-4 h-[300px] sm:h-[500px] sm:p-8 flex justify-center items-center rounded-2xl"
            style={{
              background: `linear-gradient(145deg, ${project.gradient.from}, ${project.gradient.to})`,
            }}
          >
            <Image
              src={project.images[0]}
              width={720}
              height={450}
              alt=""
              className="shadow max-h-full w-auto"
              quality={100}
            />
          </div>
        </Section>
      )}
      <ProjectInfo project={project} />
      <ProjectDescription desc={project.desc} />
      {project.images && project.images.length > 1 && (
        <Section>
          <div className="flex flex-col items-center gap-16">
            {project.images.slice(1).map((image, id) => (
              <Image key={id} src={image} width={720} height={450} alt="" />
            ))}
          </div>
        </Section>
      )}
      <ProjectNext nextProject={nextProject} />
    </main>
  )
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <Section as="header" className="py-4 sm:py-8 lg:py-8">
      <Grid className="gap-6 sm:grid-cols-12 items-start">
        <div className="sm:col-span-8 lg:col-span-9">
          <AnimatedHeading className="text-[2rem] sm:text-[5rem] lg:text-[8rem] leading-[120%] mb-1">
            {project.title}
          </AnimatedHeading>
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

function ProjectDescription({ desc }: { desc: string }) {
  return (
    <Section className="py-0 sm:py-0 lg:py-0">
      <Grid className="md:grid-cols-2">
        <p className="leading-[180%]">{desc}</p>
      </Grid>
    </Section>
  )
}

function ProjectNext({ nextProject }: { nextProject: Project }) {
  return (
    <Section>
      <MagneticLink
        href={`/work/${nextProject.slug}`}
        className="w-fit m-auto lg:text-[4rem] lg:px-16 lg:h-[160px]"
        icon={<ChevronRightIcon className="size-[0.75em]" />}
      >
        Next work
      </MagneticLink>
    </Section>
  )
}
