import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function MultiProductCarousel() {
	const [carouselRef, embla] = useEmblaCarousel({
		loop: true,
		slidesToScroll: 1,
		align: 'center',
	})
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

	const handleLeftScroll = React.useCallback(() => {
		if (!embla) return
		embla.scrollPrev()
	}, [embla])

	const handleRightScroll = React.useCallback(() => {
		if (!embla) return
		embla.scrollNext()
	}, [embla])

	React.useEffect(() => {
		if (!embla) return
		setScrollSnaps(embla.scrollSnapList())
		embla.on('select', onSelect)
	}, [embla, onSelect, setScrollSnaps])

	return (
		<div className='grid gap-y-10 px-14 sm:px-0'>
			<div className='absolute items-center left-0 w-full h-[420px] md:h-[350px] flex justify-between'>
				<button
					className='h-[48px] w-[48px] bg-[#0B864F] text-white z-[50] cursor-pointer'
					onClick={handleLeftScroll}
				>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<button
					className='h-[48px] w-[48px] bg-[#0B864F] text-white z-[50] cursor-pointer'
					onClick={handleRightScroll}
				>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>

			<div className='overflow-hidden' ref={carouselRef}>
				<div className='flex w-full cursor-grab'>
					{[
						{
							label: 'Logotipos',
							color: 'bg-[#575757] text-white',
							img: 1,
						},
						{
							label: 'Flyers',
							color: 'bg-[#0080C7] text-white',
							img: 2,
						},
						{
							label: 'Menús',
							color: 'bg-[#bb071b] text-white',
							img: 3,
						},
						{
							label: 'Empaque',
							color: 'bg-[#73b509] text-white',
							img: 4,
						},
						{
							label: 'Portada de libros',
							color: 'bg-[#fff] text-black',
							img: 5,
						},
						{
							label: 'Empaque',
							color: 'bg-[#73b509] text-white',
							img: 4,
						},
					].map((item, i) => (
						<div
							key={i}
							className='h-[420px] md:h-[350px] bg-gray-100 flex-shrink-0 relative mr-10 flex-[0_0_250px] sm:flex-[0_0_225px]'
						>
							<Image
								src={`/assets/slide-${item.img}.jpg`}
								layout='fill'
								className='object-cover'
								alt={item.label}
							/>
							<strong
								className={`absolute bottom-5 left-5 text-sm font-semibold ${item.color} px-5 py-2.5 rounded-full`}
							>
								{item.label}
							</strong>
						</div>
					))}
				</div>
			</div>

			<div className='flex justify-center gap-x-3.5'>
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

export default MultiProductCarousel
