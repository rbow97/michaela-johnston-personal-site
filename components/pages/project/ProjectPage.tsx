'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  BiArrowBack,
  BiCopy,
  BiDownArrowAlt,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from 'react-icons/bi'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectPage({ data, encodeDataAttribute }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    client,
    coverImage,
    description,
    imageGrid,
    duration,
    overview,
    site,
    tags,
    title,
  } = data ?? {}

  const startYear = new Date(duration?.start!).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'
  const router = useRouter()

  return (
    <div className="animate-fadeIn">
      <section className="min-h-[calc(100%_-_100px)] pt-8 md:pt-16 pb-10">
        {/* Header */}
        <div className="flex flex-col md:grid grid-cols-[1fr_1fr] md:flex-row gap-6 md:gap-16">
          <div className="flex flex-col gap-6">
            <button
              className="flex gap-2 items-center text-left"
              onClick={() => router.push('/projects')}
            >
              <BiArrowBack />
              <p>Back to Projects</p>
            </button>

            {/* Header and overview */}
            <h1 className="font-semibold text-copy text-5xl">{title}</h1>
            {overview && (
              <div className="text-copy text-xl">
                <CustomPortableText value={overview} />
              </div>
            )}
          </div>
          <div>
            {/* Image  */}
            <ImageBox
              data-sanity={encodeDataAttribute?.('coverImage')}
              image={coverImage}
              classesWrapper="relative aspect-[16/9]"
            />
          </div>
        </div>

        {/* Socials */}
        <div className="justify-end flex gap-2 items-center mt-4 md:mt-8">
          <p>Share on</p>
          <BiLogoFacebook />
          <BiLogoInstagram />
          <BiLogoTwitter />
          <BiLogoWhatsapp />
          <BiCopy />
        </div>

        {/* Additional info */}
        <div className="divide-inherit my-4 md:my-10 grid grid-cols-1 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {/* Duration */}
          {!!(startYear && endYear) && (
            <div className="p-3 lg:p-4">
              <div className="text-xs md:text-sm">Duration</div>
              <div className="text-md md:text-lg">
                <span data-sanity={encodeDataAttribute?.('duration.start')}>
                  {startYear}
                </span>
                {' - '}
                <span data-sanity={encodeDataAttribute?.('duration.end')}>
                  {endYear}
                </span>
              </div>
            </div>
          )}

          {/* Client */}
          {client && (
            <div className="p-3 lg:p-4">
              <div className="text-xs md:text-sm">Client</div>
              <div className="text-md md:text-lg">{client}</div>
            </div>
          )}

          {/* Site */}
          {site && (
            <div className="p-3 lg:p-4">
              <div className="text-xs md:text-sm">Site</div>
              {site && (
                <Link
                  target="_blank"
                  className="text-md text-primary-dark break-words md:text-lg"
                  href={site}
                >
                  {site}
                </Link>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="p-3 lg:p-4">
            <div className="text-xs md:text-sm">Tags</div>
            <div className="text-md flex flex-row flex-wrap md:text-lg">
              {tags?.map((tag, key) => (
                <div key={key} className="mr-1 break-words ">
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll message */}
        <div className="flex-col justify-center items-center mt-4 md:mt-8 hidden md:flex">
          <p>Scroll down for more</p>
          <BiDownArrowAlt />
        </div>
      </section>

      {/* Description */}
      {description && (
        <CustomPortableText
          paragraphClasses="text-xl text-copy mb-3 md:mb-6"
          value={description}
        />
      )}

      {/* ImageGrid */}
      {imageGrid && (
        <div className="flex flex-col md:grid grid-cols-[1fr_1fr] md:gap-6 gap-3">
          {imageGrid.map((image) => (
            <div key={image.caption} className="space-y-2">
              <ImageBox
                image={image}
                alt={image.alt}
                classesWrapper="relative col-span-1 aspect-[16/9]"
              />
              {image?.caption && (
                <div className="text-sm text-copy-light">{image.caption}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectPage
