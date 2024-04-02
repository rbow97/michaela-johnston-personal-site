import HomePage from '@/components/pages/home/HomePage'
import { loadHomePage } from '@/sanity/loader/loadQuery'

export default async function Home() {
  const initial = await loadHomePage()

  return (
    <main className="flex flex-col h-[calc(100%-80px)] md:h-[calc(100%-100px)] overflow-hidden pb-5">
      <HomePage data={initial.data} />
    </main>
  )
}
