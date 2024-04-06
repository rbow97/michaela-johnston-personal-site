'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import { resolveHref } from '@/sanity/lib/utils'
import type { ProjectsPayload } from '@/types'

export interface ProjectPageProps {
  projects: ProjectsPayload[] | null
  title?: string
  description?: any[]
}

export function ProjectsPage({
  projects,
  title,
  description,
}: ProjectPageProps) {
  // Sorting the array based on the 'date' property
  projects
    ?.sort((a, b) => {
      const key1 = a.duration?.end ? new Date(a.duration?.end) : Date.now()
      const key2 = b.duration?.end ? new Date(b.duration?.end) : Date.now()
      if (key1 < key2) {
        return -1
      } else if (key1 === key2) {
        return 0
      } else {
        return 1
      }
    })
    .reverse()

  return (
    <section className="animate-fadeIn mx-auto px-5 max-w-screen-xl">
      {/* Header */}
      <Header title={title} description={description} />

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
                <article className="h-full flex flex-col relative group">
                  <Link className="grow" href={href}>
                    {/* Image  */}
                    <ImageBox
                      image={project.coverImage}
                      classesWrapper="relative aspect-[16/9] max-h-[350px] h-full"
                      imageClassName="group-hover:scale-110 transition-all duration-[250ms]"
                    />
                  </Link>
                  <div className="absolute bottom-6 left-6 mr-6 z-10 flex flex-col gap-2 max-w-[500px] text-copy">
                    <p className="text-xl md:text-2xl font-semibold text-white w-fit transition-colors duration-[250ms] ease">
                      <Link href={href}>{project.title}</Link>
                    </p>
                    <div className="flex gap-2">
                      {project.tags?.map((tag, i) => {
                        if (i > 1) return null
                        return (
                          <div
                            key={tag}
                            className="w-fit py-2 px-3 backdrop-blur bg-foreground/30 text-xs md:text-sm text-white border-2 font-semibold border-white rounded-full transition-all ease duration-100"
                          >
                            <p>#{tag}</p>
                          </div>
                        )
                      })}
                    </div>
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
