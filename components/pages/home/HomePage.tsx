import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { showcaseProjects = [] } = data ?? {}

  return (
    <div className="h-full w-full relative animate-fadeIn">
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <>
          {showcaseProjects.map((project, key) => {
            return (
              <ProjectListItem
                encodeDataAttribute={encodeDataAttribute}
                key={key}
                project={project}
                odd={key % 2}
              />
            )
          })}
        </>
      )}
    </div>
  )
}

export default HomePage
