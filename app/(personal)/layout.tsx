import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import Link from 'next/link'

import { Footer } from '@/components/global/Footer'
import { Navbar } from '@/components/global/Navbar'
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
            'bg-background text-copy min-h-screen flex flex-col',
            workSans.className,
          )}
        >
          <div className="">
            <header className="flex items-center gap-4 py-4 md:py-8 w-full max-w-screen-xl px-5 mx-auto">
              <p className="text-primary-dark text-2xl md:text-4xl order-1 md:order-0">
                <Link className="" href="/">
                  Michaela Johnston
                </Link>
              </p>
              <Navbar />
              <ThemeButton className="order-0 md:order-2" />
            </header>
          </div>
          <div className="flex-grow">{children}</div>
          <div className="border-t border-t-copy-lighter w-full mt-10 md:mt-20">
            <Footer />
          </div>
        </body>
      </ThemeContextProvider>
    </html>
  )
}
