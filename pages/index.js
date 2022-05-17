import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import CircularCarousel from '../src/components/carousels/CircularCarousel'
import MultiProductCarousel from '../src/components/carousels/MultiProductCarousel'
import Layout from '../src/components/layout/Layout'
import SEO from '../src/components/layout/SEO'

export default function Home() {
	const [selectedIndex, setSelectedIndex] = React.useState(0)
	const [introColor, setIntroColor] = React.useState({
		text: 'text-green-500',
		bg: 'bg-green-500',
	})

	React.useEffect(() => {
		selectedIndex === 0
			? setIntroColor({ text: 'text-[#0B864F]', bg: 'bg-[#0B864F]' })
			: selectedIndex === 1
			? setIntroColor({ text: 'text-red-500', bg: 'bg-red-500' })
			: selectedIndex === 2
			? setIntroColor({ text: 'text-blue-500', bg: 'bg-blue-500' })
			: setIntroColor({ text: 'text-yellow-500', bg: 'bg-yellow-500' })
	}, [selectedIndex])

	return (
		<>
			<SEO />
			<Layout>
				<div className='max-w-screen-xl mx-auto mt-32 md:mt-48'>
					<div className='flex items-center justify-center gap-y-10 md:gap-x-10 md:gap-y-0 md:justify-between flex-col-reverse md:flex-row mt-10 px-5'>
						<CircularCarousel
							selectedIndex={selectedIndex}
							setSelectedIndex={setSelectedIndex}
						/>

						<section className='grid gap-5 text-center md:text-left'>
							<h1
								className={`text-2xl md:text-4xl lg:text-6xl ${introColor.text} transition-colors title-lh font-bold max-w-[600px] w-full`}
							>
								Líderes en servicios de diseño
							</h1>
							<div
								className={`hidden md:block w-[75px] h-[5px] ${introColor.bg} transition-colors`}
							/>
							<p className='text-base lg:text-[18px] leading-relaxed'>
								Nuestros servicios lo ayudarán a crear la presencia y la marca
								perfecta.
							</p>

							<section className='flex flex-col items-center md:flex-row gap-3.5 mt-2.5 lg:mt-8'>
								<div className='relative w-full'>
									<input
										placeholder='¿Qué necesitas diseñar?'
										className={`w-full border pl-10 px-5 pt-2.5 pb-3 rounded-md outline-none`}
									/>
									<FontAwesomeIcon
										icon={faSearch}
										className='absolute top-[1rem] left-3.5 text-gray-400'
									/>
								</div>
								<button
									className={`${introColor.bg} transition-colors px-14 py-2.5 text-white rounded-full shadow-xl hover:shadow-none border-2 border-white`}
								>
									Buscar
								</button>
							</section>
						</section>
					</div>

					<div className='mt-20 md:mt-32'>
						<div className='flex items-center justify-end gap-3.5 px-5 mb-5 text-blue-500 font-semibold'>
							<h1 className='mb-1'>Ver más</h1>
							<FontAwesomeIcon icon={faArrowRight} />
						</div>
						<MultiProductCarousel />
					</div>

					<div className='max-w-screen-lg mx-auto mt-20 md:mt-32'>
						<section className='grid gap-8 px-5 text-center md:text-left'>
							<h1 className={`text-5xl font-bold text-yellow-500`}>Empresas</h1>
							<p className='leading-relaxed md:leading-loose'>
								Cuando se trata del diseño del logotipo de tu empresa y otros
								aspectos de identidad visual, todo cuenta. <br /> <br /> Conozca a
								nuestro equipo solicitando una consulta de marca. Determinaremos
								rápidamente la mejor manera de ayudarlo a crear una identidad de
								marca visual que resuene con su público y lo ayude a alcanzar sus
								objetivos de posicionamiento.
							</p>

							<section className='grid gap-5'>
								<h2 className='text-xl font-bold'>¿Listo para empezar?</h2>
								<p className='leading-relaxed md:leading-loose'>
									¡Completa el siguiente formulario para obtener una cotización de
									marca gratuita!
								</p>
							</section>

							<div className='h-[150px] md:h-[350px] w-full bg-gray-100 relative'>
								<Image
									src={'/assets/homepage-2.jpg'}
									layout='fill'
									className='absolute object-cover'
									alt=''
								/>
							</div>
						</section>

						<div className='px-5 grid place-items-center mt-10'>
							<button className='bg-yellow-500 text-white font-semibold py-3.5 md:max-w-[450px] md:w-full px-10 md:px-5 rounded-full shadow-xl hover:shadow-none border-2 border-white'>
								Contáctanos
							</button>
						</div>
					</div>

					<article
						className='my-20 md:my-32 flex flex-col px-5 md:grid gap-14'
						style={{
							gridTemplateColumns: 'auto 5px auto',
						}}
					>
						<section
							className='grid place-items-center gap-8 md:gap-5'
							style={{ gridColumn: '1' }}
						>
							<div className='h-[150px] md:h-[275px] w-full bg-gray-200 relative'>
								<Image
									src={'/assets/homepage-3.jpg'}
									layout='fill'
									className='absolute object-cover'
									alt=''
								/>
							</div>
							<section className='grid place-items-center max-w-xl text-center gap-5'>
								<h5 className='text-xl md:text-3xl font-bold text-blue-500'>
									Tendencias en diseño 2022
								</h5>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum has been the industry’s standard dummy
									text ever since the 1500s, when an unknown printer took a galley
									of type and scrambled it to make a type specimen book. It has
									survived not only five centuries.
								</p>
								<button className='px-12 py-3.5 bg-blue-500 text-white rounded-full shadow-xl hover:shadow-none mt-5 font-semibold border-2 border-white'>
									Conocer más
								</button>
							</section>
						</section>

						<div
							className='w-full h-[1.5px] md:h-full md:w-[1.5px] bg-gray-200'
							style={{ gridColumn: '2' }}
						/>

						<section className='grid gap-10' style={{ gridColumn: '3' }}>
							<h1 className='text-lg text-center md:text-left md:text-2xl font-bold text-blue-500 md:ml-5'>
								Conoce nuestros tips de inspiración
							</h1>
							<section className='grid gap-5'>
								{Array.from(Array(3).keys()).map((i) => (
									<section key={i} className='flex items-center gap-5'>
										<div className='w-[90px] md:w-[160px] h-[75px] md:h-[130px] bg-gray-200 flex-shrink-0 relative'>
											<Image
												src={`/assets/homepage-${i + 4}.jpg`}
												layout='fill'
												className='absolute object-cover'
												alt=''
											/>
										</div>
										<p className='text-sm md:text-base'>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the
											industry&apos;s standard dummy text ever since the
											1500s.
										</p>
									</section>
								))}
							</section>

							<button className='py-3.5 px-10 justify-self-center md:justify-self-stretch border-2 border-white md:w-full bg-blue-500 text-white rounded-full shadow-xl font-semibold hover:shadow-none'>
								Llévame al blog
							</button>
						</section>
					</article>
				</div>
			</Layout>
		</>
	)
}
