import type { Project } from "@/lib/definitions"
import { Link } from "@/i18n/navigation"
import Tag from "./tag"
import data from "@/data.json"
import Grid from "./grid"
import Image from "next/image"
import { MagneticLink } from "./magnetic"
import { useTranslations } from "next-intl"

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations(`Work`)

  return (
    <Link href={`/work/${project.slug}`}>
      <div className="h-[400px] rounded-3xl sm:rounded-[2rem] bg-background/80 border border-border hover:border-soft transition-colors relative">
        <div className="h-full p-4 py-8 sm:p-[3.125rem] flex flex-col justify-between relative z-20">
          <p className="text-sm sm:text-base">{project.year}</p>

          <div className="space-y-5">
            <h3 className="text-2xl sm:text-[2.5rem]">
              {project.title} / {t(`projects.${project.slug}.subTitle`)}
            </h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              {project.tags.map((tag) => (
                <Tag key={tag} content={tag} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-[24px] sm:top-auto sm:bottom-0 right-0 z-10 opacity-80 lg:opacity-100">
          <div className="h-[16px] bg-linear-to-b from-background/0 to-background absolute bottom-0 left-0 w-full sm:opacity-50" />
          <Image
            src={project.thumbnail}
            width={716}
            height={400}
            alt={`${project.title} / ${t(`projects.${project.slug}.subTitle`)}`}
          />
        </div>
      </div>
    </Link>
  )
}

export function ProjectList() {
  const { content } = data.projects
  const t = useTranslations("Work")

  return (
    <Grid className="gap-[1.875rem] sm:gap-[3.75rem]">
      {content.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}

      <MagneticLink
        className="w-fit m-auto"
        href="https://github.com/nelrnd?tab=repositories"
        target="_blank"
      >
        {t("labels.more")}
      </MagneticLink>
    </Grid>
  )
}
