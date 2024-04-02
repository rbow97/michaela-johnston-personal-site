'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  BiArrowBack,
  BiCopy,
  BiDownArrowAlt,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from 'react-icons/bi'

import ImageGrid from '@/components/ImageGrid'

const singleImageData = [
  {
    url: '/images/dummy-image-4.jpg',
    alt: '',
    fullWidth: true,
  },
]
const imageGridData = [
  {
    url: '/images/dummy-image-1.jpg',
    alt: '',
    fullWidth: true,
  },
  {
    url: '/images/dummy-image-2.jpg',
    alt: '',
    fullWidth: false,
  },
  {
    url: '/images/dummy-image-3.jpg',
    alt: '',
    fullWidth: false,
  },
]

function Project() {
  const router = useRouter()

  return (
    <>
      <section className="min-h-[calc(100%_-_100px)] pt-8 md:pt-16 pb-10 md:pb-16 animate-fadeIn">
        <div className="flex flex-col md:grid grid-cols-[1fr_1fr] md:flex-row gap-6 md:gap-16">
          <div className="flex flex-col gap-6">
            <button
              className="flex gap-2 items-center text-left"
              onClick={() => router.push('/work')}
            >
              <BiArrowBack />
              <p>Back to work</p>
            </button>
            <h1 className="font-semibold text-copy text-6xl">Project 1</h1>
            <h2 className="font-semibold text-copy text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              error adipisci fugit cumque, optio deleniti laudantium
              voluptatibus fuga, asperiores, id sunt. Expedita nihil incidunt
              aut voluptatem est, ab consectetur quam!
            </h2>
          </div>
          <div className="h-[360px] md:h-[calc(50vw-60px)] lg:h-[440px] min-h-[340px]">
            <Image
              priority
              width={500}
              height={300}
              sizes="100vw"
              alt="work-image"
              className="w-full h-full object-cover rounded-md"
              src="/images/work-image.jpg"
            />
          </div>
        </div>
        <div className="justify-end flex gap-2 items-center mt-4 md:mt-8">
          <p>Share on</p>
          <BiLogoFacebook />
          <BiLogoInstagram />
          <BiLogoTwitter />
          <BiLogoWhatsapp />
          <BiCopy />
        </div>
        <div className="flex-col justify-center items-center mt-4 md:mt-8 hidden md:flex">
          <p>Scroll down for more</p>
          <BiDownArrowAlt />
        </div>
      </section>
      <div className="space-y-4 md:space-y-8">
        <ImageGrid data={singleImageData} />
        <ImageGrid data={imageGridData} />
      </div>
    </>
  )
}

export default Project
