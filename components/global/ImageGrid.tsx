import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  data: {
    url: string
    alt: string
    fullWidth?: boolean
  }[]
}

export default function ImageGrid({ data }: Props): JSX.Element {
  return (
    <div className="grid gap-x-6 gap-y-10">
      {data.map((image) => (
        <div
          key={image.alt}
          className={clsx(
            'w-full h-[360px] md:h-[calc(50vw-60px)]',
            image.fullWidth
              ? 'col-span-2  lg:h-[540px] min-h-[400px]'
              : 'col-span-2 md:col-span-1  lg:h-[440px] min-h-[340px]',
          )}
        >
          <Image
            width={500}
            height={300}
            sizes="100vw"
            className={clsx(
              'w-full h-full object-cover rounded-md col-start-1',
            )}
            src={image.url}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  )
}
