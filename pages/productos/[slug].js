import React from 'react'
import InputField from '../../src/components/layout/InputField'
import Layout from '../../src/components/layout/Layout'
import ProductosHeader from '../../src/components/productos/ProductosHeader'
import SEO from '../../src/components/layout/SEO'
import ProductosSubHeader from '../../src/components/productos/ProductosSubHeader'
import { useRouter } from 'next/router'
import Productos from '../../src/components/productos/Productos'
import axios from 'axios'
import makeLink from '../../src/utils/makeLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { productos as _productos } from '../../src/utils/data'

const titleRoutes = [
	'logo-e-identidad',
	'negocios-y-publicidad',
	'arte-e-ilustración',
	'editorial',
	'emprendedor',
	'empresarial',
	'desarrollo-de-productos',
	'premium',
]

const getLabelColor = ({ type = 'bg', label }) => {
	if (type === 'text') {
		return label === 'Bronce'
			? `text-[#E0B48C]`
			: label === 'Plata'
			? `text-[#B6B5B3]`
			: label === 'Oro'
			? `text-[#E8B954]`
			: label === 'Platino'
			? `text-[#303030]`
			: `text-[#29675B]`
	} else {
		return label === 'Bronce'
			? `bg-[#E0B48C]`
			: label === 'Plata'
			? `bg-[#B6B5B3]`
			: label === 'Oro'
			? `bg-[#E8B954]`
			: label === 'Platino'
			? `bg-[#303030]`
			: `bg-[#29675B]`
	}
}

export default function Slug({ productos, producto }) {
	const router = useRouter()
	const { slug } = router.query
	const isRoute = (title) => title?.toLowerCase().split(' ').join('-') === slug
	const _pageTitle = slug?.split('-').join(' ')

	return (
		<Layout>
			<SEO title={`Productos: ${_pageTitle || 'loading...'}`} />

			{router.isFallback && (
				<div className='h-[500px] w-full grid place-items-center'>loading...</div>
			)}
			{titleRoutes.includes(slug) ? (
				<>
					<section className='bg-[#4384F5] grid place-items-center gap-10 py-10'>
						<h1 className='text-3xl font-bold text-white'>¿Qué necesitas diseñar?</h1>
						<div className='max-w-lg w-full'>
							<InputField
								placeholder='Logotipo, empaque, ilustraciones…'
								additionalClasses='text-sm'
							/>
						</div>
						<ProductosHeader isRoute={isRoute} />
					</section>

					<div className='max-w-screen mx-auto'>
						<ProductosSubHeader route={slug} />
					</div>

					<Productos productos={productos} />
				</>
			) : (
				<>
					<div className='bg-[#f8f8f8] py-14'>
						<section className='max-w-screen-xl mx-auto grid grid-cols-2 items-center'>
							<div className='grid gap-10'>
								<section className='grid gap-5'>
									<h1 className='text-5xl font-bold text-[#9419E8] underline underline-offset-[5px]'>
										{producto?.title}
									</h1>
									<p className='leading-relaxed'>{producto?.description}</p>
								</section>
								<div className='flex items-center gap-3.5'>
									<button className='bg-gradient-to-r from-[#881CFD] to-[#A514CD] px-7 py-3.5 font-semibold text-white rounded-full'>
										Comenzar
									</button>
									<button className='border-2 border-[#A215D1] px-7 py-3.5 font-semibold text-[#A215D1] rounded-full'>
										Cómo funciona
									</button>
								</div>
							</div>

							<div className='max-w-md w-full h-[300px] bg-gray-200 justify-self-end' />
						</section>
					</div>

					<div className='max-w-screen-xl mx-auto grid gap-16 pt-14 pb-24'>
						<section className='max-w-md grid gap-5'>
							<h2 className='text-4xl font-bold'>Precio</h2>
							<p>
								Conoce más a cerca de nuestros precios y comienza hoy mismo tu
								proyecto
							</p>
						</section>

						<div className='grid grid-cols-5 gap-5'>
							<section>
								<div className='h-[8px]' />
								<div className='h-[225px]' />

								<div className='grid gap-3.5'>
									<span>Propuestas</span>
									<span>Revisiones</span>
									<div className='h-[1px] w-full bg-gray-200' />
									<span>Derechos de autor</span>
									<span>Entregables AI/EPS/PDF/JPEG/PNG</span>
								</div>
							</section>

							{producto?.precio?.map((_item, i) => (
								<section
									key={i}
									className={`rounded-t-md overflow-hidden shadow-[0px_0px_15px_-5px_rgba(0,0,0,.25)] ${
										_item.value === 'Contáctanos' ? 'bg-gray-100' : 'bg-white'
									}`}
								>
									<div
										className={`h-[8px] ${getLabelColor({
											label: _item.label,
										})}`}
									/>

									<div className='h-[225px] grid text-center'>
										<span
											className={`mt-5 font-bold ${getLabelColor({
												type: 'text',
												label: _item.label,
											})}`}
										>
											{_item.label}
										</span>
										<h3 className={`text-2xl font-semibold`}>
											{_item.value === 'Contáctanos'
												? 'Contáctanos'
												: `$${_item.value}`}
										</h3>
										<div className='px-3.5 border-t-2 pt-5'>
											<button className='bg-black w-full py-2.5 px-5 text-white rounded-full font-semibold shadow-xl hover:shadow-none transition-all'>
												{_item.value === 'Contáctanos'
													? 'Contáctanos'
													: 'Comprar'}
											</button>
										</div>
									</div>

									<div className='grid gap-3.5 text-center'>
										<span>{_item.propuestas}</span>
										<span>{_item.revisiones}</span>
										<div className='h-[1px] w-full bg-gray-200' />
										<span className='text-blue-500'>
											<FontAwesomeIcon icon={faCircleCheck} />
										</span>
										<span className='text-blue-500'>
											<FontAwesomeIcon icon={faCircleCheck} />
										</span>
									</div>
								</section>
							))}
						</div>
					</div>
				</>
			)}
		</Layout>
	)
}

export const getStaticPaths = async () => {
	const paths = _productos.map((p) => ({ params: { slug: makeLink(p.title) } }))

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps = async (ctx) => {
	if (_productos?.filter((p) => makeLink(p.title) === ctx.params.slug).length > 0) {
		return {
			props: {
				producto: _productos?.filter((p) => makeLink(p.title) === ctx.params.slug)[0],
			},
		}
	}

	return {
		props: {
			productos: _productos,
		},
	}
}
