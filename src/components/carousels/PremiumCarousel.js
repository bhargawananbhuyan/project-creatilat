import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const PremiumCarousel = () => {
	const [emblaRef, embla] = useEmblaCarousel({ loop: false, align: 'start', slidesToScroll: 1 })

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
		<div>
			<div className='absolute top-0 left-0 w-full h-full flex items-center justify-between'>
				<button
					className='md:-ml-16 bg-[#93d921] h-[42px] w-[42px] z-[100] md:rounded-full text-white'
					onClick={() => embla.scrollPrev()}
				>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<button
					className='md:-mr-16 bg-[#93d921] h-[42px] w-[42px] z-[100] md:rounded-full text-white'
					onClick={() => embla.scrollNext()}
				>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
			<div ref={emblaRef} className='overflow-hidden px-10 md:px-0'>
				<div className='flex gap-x-5 md:gap-x-10'>
					{['Interior libros', 'Empaque', 'Infografia'].map((item, i) => (
						<section
							key={i}
							className='flex-[0_0_100%] md:flex-[0_0_30%] h-[300px] flex flex-col items-center justify-evenly'
						>
							<h5 className='font-bold'>{item}</h5>
							<div className='relative w-full h-[250px]'>
								<Image
									src={`/assets/products/premium-${i + 1}.jpg`}
									layout='fill'
									className='absolute'
									alt=''
								/>
							</div>
						</section>
					))}
				</div>
			</div>
			<div className='flex gap-x-3.5 justify-center mt-8'>
				{scrollSnaps.map((_, i) => (
					<button
						key={i}
						className={`w-[10px] h-[10px] rounded-full ${
							i === selectedIndex ? 'bg-gray-500' : 'bg-gray-300'
						}`}
						onClick={() => scrollTo(i)}
					/>
				))}
			</div>
		</div>
	)
}

export default PremiumCarousel
