'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { useRef } from 'react'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import type { HomePagePayload } from '@/types'

import { Carousel } from './Carousel'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { showcaseProjects = [] } = data ?? {}

  return (
    <>
      {showcaseProjects && showcaseProjects.length > 1 && (
        <Carousel items={showcaseProjects}>
          <ul className="h-full flex-grow flex gap-4">
            {/* Showcase projects */}

            {showcaseProjects.map((project, key) => {
              return (
                <>
                  <ProjectListItem
                    encodeDataAttribute={encodeDataAttribute}
                    key={key}
                    project={project}
                  />
                </>
              )
            })}
          </ul>
        </Carousel>
      )}
    </>
  )
}

export default HomePage
