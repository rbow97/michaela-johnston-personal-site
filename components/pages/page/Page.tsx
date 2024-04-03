import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}

  return (
    <div>
      <div className="mb-14 animate-fadeIn">
        {/* Header */}
        <Header title={title} description={overview} />
        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="text-copy text-xl"
            value={body}
          />
        )}
      </div>
    </div>
  )
}

export default Page
