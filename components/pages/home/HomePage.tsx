'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiRightArrowCircle,
} from 'react-icons/bi'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Default to an empty object to allow previews on non-existent documents
  const { showcaseProjects = [] } = data ?? {}

  const [currentSliderPosition, setCurrentSliderPosition] = useState(0)
  const [width, setWidth] = useState<number>(0)
  const [maxWidth, setMaxWidth] = useState(0)

  useEffect(() => {
    setWidth(containerRef?.current?.offsetWidth as number)
    setMaxWidth(showcaseProjects.length * width)
  }, [width, showcaseProjects.length])

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: currentSliderPosition,
      behavior: 'smooth',
    })
  }, [currentSliderPosition])

  console.log(currentSliderPosition)

  const prevSlide = () => {
    // Calculate the new scroll position for the slider
    const newSliderScrollPos = currentSliderPosition - width

    // If the new calculated scroll position exceedes the sliders maximum range ...
    if (newSliderScrollPos < 0) {
      // ... do nothing
      setCurrentSliderPosition(maxWidth - width)
    } else setCurrentSliderPosition(newSliderScrollPos)
  }
  const nextSlide = () => {
    // Calculate the new scroll position for the slider
    const newSliderScrollPos = currentSliderPosition + width

    // If the new calculated scroll position exceedes the sliders maximum range ...
    if (newSliderScrollPos >= maxWidth) {
      // ... do nothing
      setCurrentSliderPosition(0)
    } else setCurrentSliderPosition(newSliderScrollPos)
  }

  return (
    <div
      ref={containerRef}
      className="h-full w-full animate-fadeIn overflow-x-hidden snap-x rounded-lg"
    >
      <ul className="flex-grow flex gap-4">
        {/* Showcase projects */}
        {showcaseProjects && showcaseProjects.length > 0 && (
          <>
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
          </>
        )}
      </ul>
      {showcaseProjects && showcaseProjects.length > 0 && (
        <button
          onClick={() => prevSlide()}
          className="absolute left-0 top-1/2 z-10"
        >
          <BiLeftArrowAlt size={32} />
        </button>
      )}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <button
          onClick={() => nextSlide()}
          className="absolute right-0 top-1/2 z-10"
        >
          <BiRightArrowAlt size={32} />
        </button>
      )}
    </div>
  )
}

export default HomePage
