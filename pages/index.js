import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import CircularCarousel from '../src/components/carousels/CircularCarousel'
import MultiProductCarousel from '../src/components/carousels/MultiProductCarousel'
import Layout from '../src/components/layout/Layout'
import SEO from '../src/components/layout/SEO'

export default function Home() {
	return (
		<>
			<SEO />
			<Layout>
				<div className='max-w-screen-xl mx-auto'>
					<div className='flex items-center justify-between mt-10'>
						<CircularCarousel />

						<section className='grid gap-5'>
							<h1
								className={`text-6xl text-green-600 font-bold leading-tight max-w-[600px] w-full`}
							>
								Líderes en servicios de diseño
							</h1>
							<div className={`w-[75px] h-[5px] bg-green-600`} />
							<p className='text-[18px]'>
								Nuestros servicios lo ayudarán a crear la presencia y la marca
								perfecta.
							</p>

							<section className='flex gap-3.5 mt-8'>
								<input
									placeholder='lorem ipsum dolor sit amet'
									className='border pt-2.5 pb-3 px-5 w-full rounded-lg outline-none'
								/>
								<button
									className={`bg-green-600 px-8 py-2.5 text-white rounded-full shadow-xl hover:shadow-none`}
								>
									Buscar
								</button>
							</section>
						</section>
					</div>

					<div className='mt-32'>
						<div className='flex items-center justify-end gap-3.5 mb-5 text-blue-500'>
							<h1 className='mb-1'>Ver más</h1>
							<FontAwesomeIcon icon={faArrowRight} />
						</div>
						<MultiProductCarousel />
					</div>

					<div className='max-w-screen-lg mx-auto mt-32'>
						<section className='grid gap-8'>
							<h1 className={`text-5xl font-bold text-yellow-500`}>Empresas</h1>
							<p>
								Cuando se trata del diseño del logotipo de tu empresa y otros
								aspectos de identidad visual, todo cuenta. Conozca a nuestro equipo
								solicitando una consulta de marca. Determinaremos rápidamente la
								mejor manera de ayudarlo a crear una identidad de marca visual que
								resuene con su público y lo ayude a alcanzar sus objetivos de
								posicionamiento.
							</p>

							<section className='grid gap-5'>
								<h2 className='text-xl font-bold'>¿Listo para empezar?</h2>
								<p>
									¡Completa el siguiente formulario para obtener una cotización de
									marca gratuita!
								</p>
							</section>

							<div className='h-[350px] w-full bg-gray-100 relative'>
								<Image
									src={'/assets/homepage-2.jpg'}
									layout='fill'
									className='absolute object-cover'
									alt=''
								/>
							</div>
						</section>

						<div className='grid place-items-center mt-10'>
							<button className='bg-yellow-500 text-white font-semibold py-3.5 max-w-[600px] w-full px-5 rounded-full shadow-xl hover:shadow-none'>
								Contáctanos
							</button>
						</div>
					</div>

					<article
						className='my-32 grid gap-14'
						style={{
							gridTemplateColumns: 'auto 5px auto',
						}}
					>
						<section
							className='grid place-items-center gap-5'
							style={{ gridColumn: '1' }}
						>
							<div className='h-[275px] w-full bg-gray-200 relative'>
								<Image
									src={'/assets/homepage-3.jpg'}
									layout='fill'
									className='absolute object-cover'
									alt=''
								/>
							</div>
							<section className='grid place-items-center max-w-xl text-center gap-5'>
								<h5 className='text-xl font-bold text-blue-500'>
									Tendencias en diseño 2022
								</h5>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum has been the industry’s standard dummy
									text ever since the 1500s, when an unknown printer took a galley
									of type and scrambled it to make a type specimen book. It has
									survived not only five centuries.
								</p>
								<button className='px-12 py-3.5 bg-blue-500 text-white rounded-full shadow-xl hover:shadow-none mt-5'>
									Conocer más
								</button>
							</section>
						</section>

						<div className='h-full w-[1.5px] bg-gray-200' style={{ gridColumn: '2' }} />

						<section className='grid gap-10' style={{ gridColumn: '3' }}>
							<h1 className='text-xl font-bold text-blue-500 ml-5'>
								Conoce nuestros tips de inspiración
							</h1>
							<section className='grid gap-5'>
								{Array.from(Array(3).keys()).map((i) => (
									<section key={i} className='flex items-center gap-5'>
										<div className='w-[160px] h-[130px] bg-gray-200 flex-shrink-0 relative'>
											<Image
												src={`/assets/homepage-${i + 4}.jpg`}
												layout='fill'
												className='absolute object-cover'
												alt=''
											/>
										</div>
										<p>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the
											industry&apos;s standard dummy text ever since the
											1500s.
										</p>
									</section>
								))}
							</section>

							<button className='py-3.5 w-full bg-blue-500 text-white rounded-full shadow-xl hover:shadow-none'>
								Llévame al blog
							</button>
						</section>
					</article>
				</div>
			</Layout>
		</>
	)
}
