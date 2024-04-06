import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { loadSettings } from '@/sanity/loader/loadQuery'

import { NavigationContainer } from './NavigationContainer'

export async function Navbar() {
  const initial = await loadSettings()

  return (
    <NavigationContainer
      className="order-2 md:order-1 md:ml-auto"
      data={initial.data}
    />
  )
}
