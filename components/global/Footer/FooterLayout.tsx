'use client'

import type { PortableTextBlock } from '@portabletext/types'
import { useContext } from 'react'
import { BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'

import { MyThemeContext } from '@/app/(personal)/ThemeContextProvider'
import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])

  const { isDarkTheme } = useContext(MyThemeContext)

  return (
    <footer className="mx-auto px-5 bottom-0 w-full text-left pb-8 pt-5  md:pb-16 md:pt-10 flex flex-col gap-2 max-w-screen-xl">
      {footer && (
        <CustomPortableText
          paragraphClasses="text-sm [&>a]:text-copy-light text-copy-light [&>a]:no-underline md:text-base"
          value={footer}
        />
      )}
      <div className="justify-start flex gap-2 items-center mt-2 md:mt-4">
        <BiLogoInstagram color={isDarkTheme ? '#D6D7DC' : '#5E616E'} />
        <BiLogoTwitter color={isDarkTheme ? '#D6D7DC' : '#5E616E'} />
      </div>
    </footer>
  )
}
