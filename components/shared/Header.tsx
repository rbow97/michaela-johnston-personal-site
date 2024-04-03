import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
      {/* Title */}
      {title && (
        <div className="text-2xl font-extrabold tracking-tight md:text-4xl">
          {title}
        </div>
      )}
      {/* Description */}
      {description && (
        <div className="mt-4 text-lg text-copy md:text-xl">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
