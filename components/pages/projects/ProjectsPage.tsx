'use client'

import Link from 'next/link'

import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import { resolveHref } from '@/sanity/lib/utils'
import type { ShowcaseProject } from '@/types'

export interface ProjectPageProps {
  projects: ShowcaseProject[] | null
}

export function ProjectsPage({ projects }: ProjectPageProps) {
  return (
    <section className="animate-fadeIn mx-auto px-5 max-w-screen-xl">
      {/* Header */}
      <Header title="Projects" />

      {/* Projects */}
      <ul className="flex flex-col md:grid grid-cols-[1fr_1fr] [&>li:nth-child(1)]:col-span-2 [&>li:nth-child(3n+4)]:col-span-2 justify-between gap-5 md:gap-10 mt-4 md:mt-8">
        {projects ? (
          projects.map((project, i) => {
            const href = resolveHref(project?._type, project?.slug)
            if (!href) {
              return null
            }

            return (
              <li
                key={project.title}
                className="flex flex-col gap-2 h-full w-full col-span-1"
              >
                <article className="h-full flex flex-col">
                  <Link className="grow" href={href}>
                    {/* Image  */}
                    <ImageBox
                      image={project.coverImage}
                      classesWrapper="relative aspect-[16/9] max-h-[350px] h-full"
                      imageClassName="hover:scale-110 transition-all duration-[250ms] "
                    />
                  </Link>
                  <div className="pt-2 md:pt-3">
                    <p className="text-lg text-copy w-fit hover:text-secondary transition-colors duration-[250ms] ease">
                      <Link href={href}>{project.title}</Link>
                    </p>
                  </div>
                </article>
              </li>
            )
          })
        ) : (
          <p>Add some projects</p>
        )}
      </ul>
    </section>
  )
}

export default ProjectsPage
