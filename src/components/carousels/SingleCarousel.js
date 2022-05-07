import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

function SingleCarousel({ images, fullScreen = false }) {
	const [carouselRef, embla] = useEmblaCarousel({ loop: false })
	const [scrollSnaps, setScrollSnaps] = React.useState([])
	const [selectedIndex, setSelectedIndex] = React.useState(0)

	const onSelect = React.useCallback(() => {
		if (!embla) return
		setSelectedIndex(embla.selectedScrollSnap())
	}, [embla])

	const scrollTo = React.useCallback(
		(index) => {
			if (!embla) return
			embla.scrollTo(index)
		},
		[embla]
	)

	React.useEffect(() => {
		if (!embla) return
		setScrollSnaps(embla.scrollSnapList())
		embla.on('select', onSelect)
	}, [embla, setScrollSnaps, onSelect])

	return (
		<div className='grid gap-y-5'>
			<div className='overflow-hidden' ref={carouselRef}>
				<div className='flex gap-x-2.5'>
					{images?.map((img, i) => (
						<div
							key={i}
							className={`bg-gray-200 h-[${
								fullScreen ? 320 : 275
							}px] flex-[0_0_100%] relative`}
						>
							<Image
								src={`/assets/products/${img}`}
								layout='fill'
								alt=''
								className='absolute object-cover'
							/>
						</div>
					))}
				</div>
			</div>

			<div className='flex gap-x-3.5 justify-center'>
				{scrollSnaps.map((_, i) => (
					<button
						key={i}
						onClick={() => scrollTo(i)}
						className={`h-[10px] w-[10px] ${
							selectedIndex === i ? 'bg-gray-400' : 'bg-gray-200'
						} rounded-full`}
					/>
				))}
			</div>
		</div>
	)
}

export default SingleCarousel
