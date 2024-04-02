import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import { Lexend, Work_Sans } from 'next/font/google'
import Link from 'next/link'

import { NavigationContainer } from '@/components/global/Navbar/NavigationContainer'
import ThemeButton from '@/components/pages/home/ThemeButton'

import { ThemeContextProvider } from './ThemeContextProvider'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michaela Johnston',
  description: "Michaela Johnston's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeContextProvider>
        <body
          className={clsx(
            'bg-background text-copy mx-auto px-5 max-w-screen-xl',
            workSans.className,
          )}
        >
          <header className="flex items-center gap-4 h-[80px] md:h-[100px]">
            <p className="text-primary-dark text-2xl md:text-4xl order-1 md:order-0">
              <Link className="" href="/">
                Michaela Johnston
              </Link>
            </p>
            <NavigationContainer className="order-2 md:order-1 ml-auto" />
            <ThemeButton className="order-0 md:order-2" />
          </header>
          {children}
        </body>
      </ThemeContextProvider>
    </html>
  )
}
