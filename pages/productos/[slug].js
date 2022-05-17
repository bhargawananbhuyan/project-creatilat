import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'
import SingleCarousel from '../../src/components/carousels/SingleCarousel'
import InputField from '../../src/components/layout/InputField'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import Productos from '../../src/components/productos/Productos'
import ProductosHeader from '../../src/components/productos/ProductosHeader'
import ProductosSubHeader from '../../src/components/productos/ProductosSubHeader'
import { productos as _productos } from '../../src/utils/data'
import makeLink from '../../src/utils/makeLink'
import Link from 'next/link'

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

	const addToCart = (value, uuid) => {
		if (window !== undefined) {
			if (!window.localStorage.getItem('user_data')) {
				router.replace('/login')
				return
			}

			if (value !== 'Contáctanos') {
				const cartItems = window?.localStorage.getItem('cart_items')
				if (!cartItems) {
					window?.localStorage.setItem(
						'cart_items',
						JSON.stringify([
							{
								Product: { PublicKey: uuid },
								Quantity: 1,
							},
						])
					)
					console.log(cartItems)
				} else if (
					JSON.parse(cartItems).filter((item) => item.Product.PublicKey === uuid)
						.length === 0
				) {
					window?.localStorage.setItem(
						'cart_items',
						JSON.stringify([
							{
								Product: { PublicKey: uuid },
								Quantity: 1,
							},
							...JSON.parse(cartItems),
						])
					)
				} else if (
					JSON.parse(cartItems).filter((item) => item.Product.PublicKey === uuid).length >
					0
				) {
					window?.localStorage.setItem(
						'cart_items',
						JSON.stringify([
							{
								Product: { PublicKey: uuid },
								Quantity: (JSON.parse(cartItems).filter(
									(item) => item.Product.PublicKey === uuid
								)[0].Quantity += 1),
							},
							...JSON.parse(cartItems).filter(
								(item) => item.Product.PublicKey !== uuid
							),
						])
					)
				}
			} else {
				router.replace('/contacto')
			}
		}
	}

	return (
		<Layout>
			<SEO title={`Productos: ${_pageTitle || 'loading...'}`} />

			{router.isFallback && (
				<div className='h-[500px] w-full grid place-items-center'>loading...</div>
			)}
			{titleRoutes.includes(slug) ? (
				<>
					<section className='bg-[#4384F5] grid place-items-center gap-10 py-10 pb-5 md:pb-10 px-5 mt-16 md:mt-32'>
						<h1 className='text-xl md:text-3xl font-bold text-white'>
							¿Qué necesitas diseñar?
						</h1>
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
				!router.isFallback && (
					<>
						<div className='bg-[#f8f8f8] py-14 mt-16 md:mt-32'>
							<section className='max-w-screen-xl mx-auto grid px-5 md:grid-cols-2 gap-y-10 items-center'>
								<div className='grid gap-10 place-items-center md:place-items-start text-center md:text-left'>
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
										<Link href='/como-funciona'>
											<a>
												<button className='border-2 border-[#A215D1] px-7 py-3.5 font-semibold text-[#A215D1] rounded-full'>
													Cómo funciona
												</button>
											</a>
										</Link>
									</div>
								</div>

								<div className='max-w-md mx-auto md:mx-0 w-full h-[350px] bg-white justify-self-end p-5 shadow-xl'>
									<SingleCarousel
										images={Array.from(Array(4).keys()).map(
											() => producto?.images[1]
										)}
									/>
								</div>
							</section>
						</div>

						<div className='max-w-screen-xl mx-auto grid gap-16 pt-14 pb-24 px-5'>
							<section className='max-w-md grid gap-5'>
								<h2 className='text-4xl font-bold'>Precio</h2>
								<p>
									Conoce más a cerca de nuestros precios y comienza hoy mismo tu
									proyecto
								</p>
							</section>

							<div className='flex md:grid grid-cols-5 gap-5 overflow-scroll hide-scrollbar py-5'>
								<section>
									<div className='h-[8px]' />
									<div className='h-[225px]' />

									<div className='grid gap-3.5 font-semibold md:font-normal px-5 md:px-0'>
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
										className={`rounded-t-md min-w-[300px] md:min-w-full overflow-hidden shadow-[0px_0px_15px_-5px_rgba(0,0,0,.25)] ${
											_item.value === 'Contáctanos'
												? 'bg-gray-100'
												: 'bg-white'
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
												<button
													className='bg-black w-full py-2.5 px-5 text-white rounded-full font-semibold shadow-xl hover:shadow-none transition-all border-2 border-white'
													onClick={() =>
														addToCart(_item.value, _item.uuid)
													}
												>
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
				)
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
