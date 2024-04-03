'use client'

import clsx from 'clsx'
import { useContext } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { MyThemeContext } from '@/app/(personal)/ThemeContextProvider'
import Button from '@/components/global/Button'

function ThemeButton({ className }: { className?: string }): JSX.Element {
  const { isDarkTheme, toggleThemeHandler } = useContext(MyThemeContext)

  return (
    <Button
      className={clsx('text-copy-light', className)}
      onClick={() => toggleThemeHandler()}
    >
      {isDarkTheme ? <FiSun /> : <FiMoon />}
      <span className="hidden md:block">{isDarkTheme ? 'Light' : 'Dark'}</span>
    </Button>
  )
}

export default ThemeButton
