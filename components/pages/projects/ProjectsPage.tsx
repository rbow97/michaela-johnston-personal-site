'use client'

import Image from 'next/image'
import Link from 'next/link'

import { resolveHref } from '@/sanity/lib/utils'
import type { ShowcaseProject } from '@/types'

export interface ProjectPageProps {
  projects: ShowcaseProject[] | null
}

export function ProjectsPage({ projects }: ProjectPageProps) {
  return (
    <section className="h-[calc(100%-80px)] md:h-[calc(100%-100px)] pt-8 md:pt-16">
      <ul className="flex max-w-md md:max-w-5xl mx-auto flex-wrap justify-between animate-fadeIn">
        {projects ? (
          projects.map((project, i) => {
            const href = resolveHref(project?._type, project?.slug)
            if (!href) {
              return null
            }

            return (
              <li
                key={project.title}
                className="flex flex-col gap-2 h-fit w-full md:w-1/2 px-8 py-3 "
              >
                <article>
                  <Link
                    className="h-[360px] md:h-[calc(50vw-60px)] lg:h-[440px] min-h-[340px] block"
                    href={href}
                  >
                    <div className=" h-full w-full relative overflow-hidden rounded-md">
                      <Image
                        width={500}
                        height={300}
                        sizes="100vw"
                        className="rounded-md w-full h-full object-cover hover:scale-110 transition-all duration-[250ms] ease"
                        src="/images/work-image.jpg"
                        alt="placeholder"
                      />
                    </div>
                  </Link>
                  <div className="pt-6">
                    <h2 className="text-xl text-copy w-fit hover:text-secondary transition-colors duration-[250ms] ease">
                      <Link href={href}>{project.title}</Link>
                    </h2>
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
