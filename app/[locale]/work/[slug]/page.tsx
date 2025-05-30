import AnimatedHeading from "@/components/animated-heading"
import CTA from "@/components/cta"
import Grid from "@/components/grid"
import { MagneticLink } from "@/components/magnetic"
import RichText from "@/components/rich-text"
import Section from "@/components/section"
import Tag from "@/components/tag"
import data from "@/data.json"
import { routing } from "@/i18n/routing"
import { Project } from "@/lib/definitions"
import { ArrowUpIcon, ChevronRightIcon } from "@heroicons/react/16/solid"
import type { Metadata } from "next"
import { hasLocale, useTranslations } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const project = data.projects.content.find((project) => project.slug === slug)
  const t = await getTranslations({
    locale,
    namespace: `Work.projects.${project?.slug}`,
  })
  return {
    title: project?.title + ", " + t("subTitle"),
    description: t("description"),
    keywords: project?.tags,
  }
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)
  const index = data.projects.content.findIndex(
    (project) => project.slug === slug
  )
  const project = data.projects.content[index]
  const nextIndex = index + 1 < data.projects.content.length ? index + 1 : 0
  const nextProject = data.projects.content[nextIndex]

  if (!project) return <p>Project not found</p>

  const t = await getTranslations(`Work.projects.${project.slug}`)

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
              width={1400}
              height={875}
              alt=""
              className="shadow max-h-full w-auto"
              quality={100}
            />
          </div>
        </Section>
      )}
      <ProjectInfo project={project} />
      <ProjectDescription desc={t("description")} />
      {project.images && project.images.length > 1 && (
        <Section>
          <div className="flex flex-col items-center gap-16">
            {project.images.slice(1).map((image, id) => (
              <Image key={id} src={image} width={1400} height={875} alt="" />
            ))}
          </div>
        </Section>
      )}
      <ProjectNext nextProject={nextProject} />
      <CTA />
    </main>
  )
}

function ProjectInfo({ project }: { project: Project }) {
  const t = useTranslations("Work")

  return (
    <Section as="header" className="py-4 sm:py-8 lg:py-8">
      <Grid className="gap-6 sm:grid-cols-12 items-start">
        <div className="sm:col-span-8 lg:col-span-9">
          <AnimatedHeading className="text-[2rem] sm:text-[5rem] lg:text-[8rem] leading-[120%] mb-1">
            {project.title}
          </AnimatedHeading>
          <p>{t(`projects.${project.slug}.subTitle`)}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 sm:gap-y-3 sm:col-span-4 lg:col-span-6">
          {project.tags.map((tag) => (
            <Tag key={tag} content={tag} />
          ))}
        </div>
        <Grid className="grid-cols-2 sm:col-span-8 lg:col-span-6">
          <div>
            <h3 className="title mb-3">{t("labels.year")}</h3>
            <p>{project.year}</p>
          </div>
          <div>
            <h3 className="title mb-3">{t("labels.roles")}</h3>
            <ul>
              <RichText>
                {(tags) => t.rich(`projects.${project.slug}.roles`, tags)}
              </RichText>
            </ul>
          </div>
        </Grid>

        <div className="flex flex-col gap-3 sm:row-start-1 sm:col-span-4 sm:-col-start-5 lg:col-span-3 lg:-col-start-4 sm:self-center">
          <Link
            href={project.links.website}
            target="_blank"
            className="btn btn-primary"
          >
            <span className="flex-1">{t("labels.website")}</span>
            <ArrowUpIcon className="size-[1em] rotate-45" />
          </Link>
          <Link
            href={project.links.code}
            target="_blank"
            className="btn btn-secondary"
          >
            <span className="flex-1">{t("labels.code")}</span>
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
  const t = useTranslations("Work.labels")

  return (
    <Section>
      <MagneticLink
        href={`/work/${nextProject.slug}`}
        className="w-fit m-auto lg:text-[4rem] lg:px-16 lg:h-[160px]"
        icon={<ChevronRightIcon className="size-[0.75em]" />}
      >
        {t("next")}
      </MagneticLink>
    </Section>
  )
}
