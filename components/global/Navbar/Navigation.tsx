import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const routes = [
  { name: 'Work', route: '/work' },
  { name: 'About', route: '/about' },
  { name: 'Contact', route: '/contact' },
]

export default function Navigation({
  className,
}: {
  className?: string
}): JSX.Element {
  const pathname = usePathname()
  return (
    <nav className={clsx('grow ', className)}>
      <ul className="flex flex-col items-center gap-y-8 md:flex-row gap-x-3">
        {routes.map((route) => (
          <li
            key={route.name}
            className={clsx(
              pathname === route.route ? 'text-secondary-dark' : 'text-copy',
            )}
          >
            <Link href={route.route}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
