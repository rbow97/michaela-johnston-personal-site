import type { PortableTextBlock } from '@portabletext/types'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import { resolveHref } from '@/sanity/lib/utils'
import type { ShowcaseProject } from '@/types'

interface ProjectProps {
  project: ShowcaseProject
  key: number
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectListItem(props: ProjectProps) {
  const { project, encodeDataAttribute, key } = props
  return (
    <li
      className="h-full w-full relative shrink-0 snap-start"
      id={`slide-${project.slug}`}
    >
      <ImageBox
        image={project.coverImage}
        alt={`Cover image from ${project.title}`}
        classesWrapper="relative aspect-[16/9] h-full"
      />
      <TextBox
        key={key}
        encodeDataAttribute={encodeDataAttribute}
        project={project}
      />
    </li>
  )
}

function TextBox({
  project,
  encodeDataAttribute,
  key,
}: {
  project: ShowcaseProject
  key: number
  encodeDataAttribute?: EncodeDataAttributeCallback
}) {
  const href = resolveHref(project?._type, project?.slug)
  if (!href) {
    return null
  }

  return (
    <div className="bg-foreground/50 p-8 rounded-md absolute bottom-6 left-6 mr-6 z-10 flex flex-col gap-2 max-w-[500px] text-copy">
      <h2 className="font-semibold ">{project.title}</h2>
      <div className="line-clamp-2">
        <CustomPortableText
          paragraphClasses="mb-6 md:mb-12"
          value={project.overview as PortableTextBlock[]}
        />
      </div>
      <Link
        href={href}
        data-sanity={encodeDataAttribute?.(['showcaseProjects', key, 'slug'])}
        className=" w-fit mt-2 flex gap-2 items-center"
      >
        <span className=" font-semibold">View more</span>
        <BiRightArrowAlt />
      </Link>
    </div>
  )
}
