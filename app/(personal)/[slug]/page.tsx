import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Page } from '@/components/pages/page/Page'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadPage, loadProjects } from '@/sanity/loader/loadQuery'
import ProjectsPage from '@/components/pages/projects/ProjectsPage'
const PagePreview = dynamic(() => import('@/components/pages/page/PagePreview'))

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: page } = await loadPage(params.slug)

  return {
    title: page?.title,
    description: page?.overview
      ? toPlainText(page.overview)
      : (await parent).description,
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('page')
}

export default async function PageSlugRoute({ params }: Props) {
  const initial = await loadPage(params.slug)
  const projects = await loadProjects()

  if (draftMode().isEnabled) {
    return <PagePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  if (params.slug === 'projects')
    return <ProjectsPage projects={projects.data} />
  else return <Page data={initial.data} />
}
