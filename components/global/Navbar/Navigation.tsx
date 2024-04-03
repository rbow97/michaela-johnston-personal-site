import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { resolveHref } from '@/sanity/lib/utils'
import { MenuItem } from '@/types'

export default function Navigation({
  className,
  menuItems,
}: {
  className?: string
  menuItems: MenuItem[]
}): JSX.Element {
  const pathname = usePathname()

  return (
    <nav className={clsx('grow ', className)}>
      <ul className="flex flex-col items-center gap-y-8 md:flex-row gap-x-3">
        {menuItems.map((item) => {
          const href = resolveHref(item?._type, item?.slug)
          if (!href) {
            return null
          }

          return (
            <li
              key={item.title}
              className={`hover:text-secondary-dark ${clsx(
                pathname.includes(`/${item.title?.toLowerCase()}`)
                  ? 'text-secondary-dark'
                  : 'text-copy',
              )}`}
            >
              <Link href={href}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
