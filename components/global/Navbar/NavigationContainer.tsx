'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { MenuItem, SettingsPayload } from '@/types'

import { HamburgerButton } from './HamburgerButton'
import Navigation from './Navigation'

export function NavigationContainer({
  className,
  data,
}: {
  className?: string
  data: SettingsPayload
}): JSX.Element {
  const [displayNav, setDisplayNav] = useState(false)
  const pathname = usePathname()
  const menuItems = data?.menuItems || ([] as MenuItem[])

  // Choose the screen size and set nav
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setDisplayNav(false)
    } else {
      setDisplayNav(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  // Display normal on large screens
  useEffect(() => {
    if (window.innerWidth > 768) {
      setDisplayNav(true)
    }
  }, [])

  // Close mobie nav on re routing
  useEffect(() => {
    if (window.innerWidth < 768) {
      setDisplayNav(false)
    }
  }, [pathname])

  // Prevent body scrolling when mobile nav is open
  useEffect(() => {
    if (window.innerWidth < 768 && displayNav) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'unset'
  }, [displayNav])

  return (
    <div className={className}>
      {displayNav && (
        <Navigation
          menuItems={menuItems}
          className={clsx(
            // Mobile
            'fixed flex items-center justify-center text-4xl md:text-lg top-0 left-0 right-0 z-20 overflow-hidden h-full bg-background ',

            // Desktop
            'md:static md:z-0 md:flex md:justify-end md:items-center',
          )}
        />
      )}
      <HamburgerButton
        active={displayNav}
        setActive={setDisplayNav}
        className="flex z-20 md:hidden"
      />
    </div>
  )
}
