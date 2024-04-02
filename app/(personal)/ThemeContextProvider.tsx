'use client'

import { createContext, useEffect, useState } from 'react'

export const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
})

interface ThemePropsInterface {
  children?: JSX.Element
}

export function ThemeContextProvider(props: ThemePropsInterface): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  useEffect(() => initialThemeHandler())

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem('isDarkTheme')
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', `true`)
      document!.querySelector('body')!.classList.add('dark')
      setIsDarkTheme(true)
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem('isDarkTheme')!,
      )
      isDarkTheme && document!.querySelector('body')!.classList.add('dark')
      setIsDarkTheme(() => {
        return isDarkTheme
      })
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem('isDarkTheme')!,
    )
    setIsDarkTheme(!isDarkTheme)
    toggleDarkClassToBody()
    setValueToLocalStorage()
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector('body')!.classList.toggle('dark')
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`)
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  )
}
