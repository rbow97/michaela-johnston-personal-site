import { useEffect, useRef, useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

import { ShowcaseProject } from '@/types'

interface Props {
  items: ShowcaseProject[]
  children: JSX.Element
}

export function Carousel({ items, children }: Props): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSliderPosition, setCurrentSliderPosition] = useState(0)
  const [width, setWidth] = useState<number>(0)
  const [maxWidth, setMaxWidth] = useState(0)

  useEffect(() => {
    setWidth(containerRef?.current?.offsetWidth as number)
    setMaxWidth(items.length * width)
  }, [width, items.length])

  useEffect(() => {
    containerRef.current?.scrollTo({
      left: currentSliderPosition,
      behavior: 'smooth',
    })
  }, [currentSliderPosition])

  const prevSlide = () => {
    // Calculate the new scroll position for the slider
    const newSliderScrollPos = currentSliderPosition - width

    // If the new calculated scroll position exceedes the sliders minumum range ...
    if (newSliderScrollPos < 0) {
      // ... go to last item
      setCurrentSliderPosition(maxWidth - width)
    } else setCurrentSliderPosition(newSliderScrollPos)
  }
  const nextSlide = () => {
    // Calculate the new scroll position for the slider
    const newSliderScrollPos = currentSliderPosition + width

    // If the new calculated scroll position exceedes the sliders maximum range ...
    if (newSliderScrollPos >= maxWidth) {
      // ... do nothing
      setCurrentSliderPosition(0)
    } else setCurrentSliderPosition(newSliderScrollPos)
  }

  return (
    <div className="w-full h-full flex flex-col gap-2 relative animate-fadeIn">
      <div
        ref={containerRef}
        className="grow w-full overflow-x-hidden snap-x rounded-lg"
      >
        {children}
      </div>
      {items.length > 1 && (
        <div className="flex justify-end gap-2 md:absolute md:bottom-6 md:right-6 md:z-10">
          <button
            className=" bg-secondary/80 rounded-full p-2"
            onClick={() => prevSlide()}
          >
            <BiLeftArrowAlt size={32} />
          </button>
          <button
            className="bg-secondary/80 rounded-full p-2"
            onClick={() => nextSlide()}
          >
            <BiRightArrowAlt size={32} />
          </button>
        </div>
      )}
    </div>
  )
}
