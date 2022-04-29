import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'

const Index = () => {
	return (
		<Layout>
			<SEO title='Paquetes' />

			<div className='grid place-items-center bg-black text-white py-14'>
				<section className='grid gap-2.5'>
					<h1 className='text-5xl font-bold'>Premium.</h1>
					<h2 className='bg-white text-black justify-self-end pl-2.5 pr-8 text-xl -mr-5 font-semibold'>
						Pro
					</h2>
				</section>
			</div>

			<div className='max-w-screen-xl mx-auto py-20'>
				<div className='grid grid-cols-2 gap-x-20 items-center'>
					<section>
						<p>
							Sabemos que necesita un trabajo de alta calidad, por lo que todos
							losproyectos que presentamos recibirán la mejor atención para que no
							sólo cumplan con lo que se espera de ellos, sino que lo superen sus
							expectativas.
						</p>

						<section className='grid gap-5 my-8'>
							<h2 className='text-5xl font-bold'>Plan Premium</h2>
							<p className='text-blue-500 grid gap-1.5'>
								<span>Ediciones ilimitadas</span>
								<span>Planes Personalizados</span>
								<span>Atención personalizada</span>
								<span>Chat de comunicación directa con diseñador</span>
								<span>Los mejores diseñadores con experiencia</span>
							</p>
							<button className='ml-5 mt-5 bg-[#5544C5] text-white font-semibold px-16 py-2.5 rounded-full justify-self-start shadow-xl hover:shadow-none transition-all'>
								Contáctanos
							</button>
							<div className='ml-20 text-2xl text-[#5544C5] flex gap-5'>
								<FontAwesomeIcon icon={faFacebookF} />
								<FontAwesomeIcon icon={faInstagram} />
								<FontAwesomeIcon icon={faEnvelope} />
							</div>
						</section>
					</section>

					<section className='h-[350px] w-full bg-gray-200' />
				</div>

				<section className='max-w-screen-sm mx-auto grid grid-cols-2 items-center p-8 bg-gradient-to-r from-[#fff] via-[#F8FDFC] to-[#42c99e6d] rounded-xl shadow-xl'>
					<div className='grid gap-2.5'>
						<h2 className='text-xl font-bold text-[#3CC4A5]'>
							¿Necesitas más información?
						</h2>
						<p className='text-sm'>
							Habla con nuestros expertos en diseño para crear el plan perfecto que se
							ajuste a tus necesidades.
						</p>
					</div>
					<div className='justify-self-end'>
						<button className='py-2.5 px-8 bg-[#5544C5] text-white rounded-full shadow-xl hover:shadow-none transition-all'>
							Habla con nosotros
						</button>
					</div>
				</section>
			</div>

			<div className='bg-[#f8f8f8] pt-14 pb-20'>
				<div className='max-w-screen-md mx-auto grid place-items-center gap-10'>
					<section className='text-2xl font-bold text-center'>
						<h2>Si puedes imaginarlo,</h2>
						<h3 className='text-[#3CC4A5]'>podemos diseñarlo</h3>
					</section>

					<div className='w-full h-[350px] bg-gray-300'></div>
				</div>
			</div>
		</Layout>
	)
}

export default Index
