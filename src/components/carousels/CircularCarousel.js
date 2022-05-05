import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const CircularCarousel = () => {
	const [carouselRef, embla] = useEmblaCarousel({ loop: false })
	const [scrollSnaps, setScrollSnaps] = useState([])
	const [selectedIndex, setSelectedIndex] = useState(0)

	const onSelect = useCallback(() => {
		if (!embla) return
		setSelectedIndex(embla.selectedScrollSnap())
	}, [embla])

	const scrollTo = useCallback(
		(index) => {
			if (!embla) return
			embla.scrollTo(index)
		},
		[embla]
	)

	useEffect(() => {
		if (!embla) return
		setScrollSnaps(embla.scrollSnapList())
		embla.on('select', onSelect)
	}, [embla, onSelect, setScrollSnaps])

	return (
		<div className='grid place-items-center w-[450px] gap-y-10'>
			<div className='overflow-hidden w-full' ref={carouselRef}>
				<div className='flex'>
					{Array.from(Array(4).keys()).map((i) => (
						<div
							key={i}
							className='h-[420px] flex-shrink-0 relative mr-10 flex-[0_0_100%]'
						>
							<Image
								src={`/assets/homepage-1.jpg`}
								layout='fill'
								className='object-contain'
								alt=''
								loading='eager'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='flex gap-x-3.5'>
				{scrollSnaps.map((_, i) => (
					<button
						key={i}
						className={`h-[10px] w-[10px] ${
							i === selectedIndex ? 'bg-gray-400' : 'bg-gray-200'
						} rounded-full`}
						onClick={() => scrollTo(i)}
					></button>
				))}
			</div>
		</div>
	)
}

export default CircularCarousel
