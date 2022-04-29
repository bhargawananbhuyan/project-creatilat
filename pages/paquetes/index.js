import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'

const Index = () => {
	return (
		<Layout>
			<SEO title='Paquetes' />

			<article className='max-w-screen-xl mx-auto'>
				<section className='grid place-items-center gap-y-3.5'>
					<h1 className='text-4xl font-bold'>El paquete que buscabas</h1>
					<p>Encuentra el paquete que se ajusta a tus necesidades.</p>
				</section>

				<div className='paquetes-wrapper'>
					{[
						{
							title: 'Emprendedor',
							subtitle: 'Logo + Flyer',
						},
						{
							title: 'Empresarial',
							subtitle: 'Logo + Tarjeta de Pres. + Firma elec.',
						},
						{
							title: 'Desarrollo de Productos',
							subtitle: 'Logo + Etiqueta + Empaque',
						},
						{
							title: 'Editorial',
							subtitle: 'Portada de libro + Diseño interior libro',
						},
					].map((item, i) => (
						<section key={i} className='paquetes-card'>
							<div className='w-[150px] h-[100px] bg-gray-200' />
							<h2 className='text-4xl'>
								$<strong>74</strong>.99
							</h2>
							<section className='text-center'>
								<h3 className='font-bold text-lg'>{item.title}</h3>
								<h4 className='text-sm font-bold text-[#C79936]'>
									{item.subtitle}
								</h4>
							</section>
							<div className='h-[1px] w-full bg-gray-200' />
							<p className='text-sm leading-relaxed'>
								Con el paquete emprendedor comienza o mejora esa idea de negocio que
								soñaste, una imagen competitiva que te pocisionará en el mercado
								meta elegido.
							</p>
							<div className='justify-self-start paquetes-icon-titles'>
								<div>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span>Incluye derechos de autor</span>
								</div>
								<div>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span>2 propuestas</span>
								</div>
								<div>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span>3 revisiones</span>
								</div>
								<div>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span>Entregables AI/EPS/PDF/JPEG/PNG</span>
								</div>
							</div>
							<button className='bg-black w-full text-white py-2.5 rounded-full mt-5'>
								Comprar
							</button>
						</section>
					))}
				</div>
			</article>
		</Layout>
	)
}

export default Index
