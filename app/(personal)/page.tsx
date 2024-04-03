import HomePage from '@/components/pages/home/HomePage'
import { loadHomePage } from '@/sanity/loader/loadQuery'

export default async function Home() {
  const initial = await loadHomePage()

  return (
    <main className="flex h-full flex-col overflow-hidden mx-auto px-5 max-w-screen-xl">
      <HomePage data={initial.data} />
    </main>
  )
}
