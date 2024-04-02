import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'
import { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function HeroImage({
  data,
  encodeDataAttribute,
}: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '' } = data ?? {}

  const project = showcaseProjects[0]

  return (
    <div className="h-full w-full relative animate-fadeIn">
      <Image
        priority
        width={500}
        height={300}
        sizes="100vw"
        alt="hero-image"
        src={project.coverImage && urlForImage(project.coverImage)?.url()}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="bg-foreground/50 p-8 rounded-md absolute bottom-16 left-6 mr-6 z-10 flex flex-col gap-2 max-w-[500px] text-copy">
        <h2 className="font-semibold ">{project.title}</h2>
        <div className="line-clamp-2">
          <CustomPortableText value={project.overview as PortableTextBlock[]} />
        </div>
        <Link href="/work/1" className=" w-fit mt-2 flex gap-2 items-center">
          <span className=" font-semibold">View more</span>
          <BiRightArrowAlt />
        </Link>
      </div>
    </div>
  )
}
