import { faMobileScreen, faPiggyBank, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../../src/components/layout/Layout'

export default function Index() {
	return (
		<Layout>
			<div>
				<div className='bg-gray-200'>
					<section className='max-w-screen-xl mx-auto py-14 grid place-items-center gap-10'>
						<h1 className='text-4xl font-bold'>
							Recomienda nuestros productos y gana más.
						</h1>
						<button className='bg-yellow-500 text-white font-semibold px-10 py-3.5 rounded-full shadow-xl hover:shadow-none'>
							Quiero afiliarme
						</button>
					</section>
				</div>

				<div className='max-w-screen-xl mx-auto'>
					<section className='py-20 grid gap-5'>
						<h2 className='text-2xl font-bold ml-10'>
							¿Qué es el programa de afiliados?
						</h2>
						<p className='max-w-3xl'>
							Es un programa donde afiliados promueven nuestros servicios y en el que
							pueden ganar increíbles comisiones. Con nuestro programa de afiliados
							todos ganan.
						</p>

						<section className='grid grid-cols-3 place-items-center mt-8'>
							<div className='grid place-items-center text-center gap-8'>
								<FontAwesomeIcon
									icon={faQuestionCircle}
									className='text-4xl text-yellow-500'
								/>
								<section className='grid place-items-center gap-2.5'>
									<div className='h-[32px] w-[32px] bg-gray-800 grid place-items-center rounded-full font-bold text-white'>
										1
									</div>
									<div>
										<h3 className='text-lg font-bold'>Llena el formulario</h3>
										<p>¡Ser afiliado es completamente gratis!</p>
									</div>
								</section>
							</div>
							<div className='grid place-items-center text-center gap-8'>
								<FontAwesomeIcon
									icon={faMobileScreen}
									className='text-4xl text-yellow-500'
								/>
								<section className='grid place-items-center gap-2.5'>
									<div className='h-[32px] w-[32px] bg-gray-800 grid place-items-center rounded-full font-bold text-white'>
										2
									</div>
									<div>
										<h3 className='text-lg font-bold'>Comparte tu link</h3>
										<p>
											Usa tu link único personalizado para referir clientes.
										</p>
									</div>
								</section>
							</div>
							<div className='grid place-items-center text-center gap-8'>
								<FontAwesomeIcon
									icon={faPiggyBank}
									className='text-4xl text-yellow-500'
								/>
								<section className='grid place-items-center gap-2.5'>
									<div className='h-[32px] w-[32px] bg-gray-800 grid place-items-center rounded-full font-bold text-white'>
										3
									</div>
									<div>
										<h3 className='text-lg font-bold'>Obtén tu comisión</h3>
										<p>Cuando algún referido haga una compra calificada de.</p>
									</div>
								</section>
							</div>
						</section>
					</section>

					<section>
						<div className='h-[320px] w-full bg-gray-100' />
					</section>

					<section className='py-20 grid gap-12'>
						<h4 className='text-lg font-bold text-blue-500 underline underline-offset-4 decoration-[3.5px]'>
							Niveles de afiliación
						</h4>
						<div className='grid grid-cols-3 place-items-center gap-16'>
							<section className='grid place-items-center gap-5 text-center'>
								<h5 className='text-lg font-bold'>Nivel Plata</h5>
								<div className='h-[75px] w-[75px] bg-gray-200' />
								<p>
									Haz más de 25 ventas mensuales y pasaras a nivel plata en el que
									podrás ganar 5% de comisión por cada cliente nuevo que efectúe
									compra(s) de servicio(s) exitosamente.
								</p>
							</section>
							<section className='grid place-items-center gap-5 text-center'>
								<h5 className='text-lg font-bold'>Nivel Oro</h5>
								<div className='h-[100px] w-[100px] bg-gray-200' />
								<p>
									Una vez que tengas un récord de 40 ventas mensuales por 3 meses
									consecutivos, pasaras a afiliado nivel oro, ganando 8% de
									comisiones por cada cliente nuevo que efectúe compra(s) de
									servicio(s) exitosamente.
								</p>
							</section>
							<section className='grid place-items-center gap-5 text-center'>
								<h5 className='text-lg font-bold'>Nivel Bronce</h5>
								<div className='h-[75px] w-[75px] bg-gray-200' />
								<p>
									Emprende tu camino ganando comisiones del 3% por cada cliente
									nuevo que efectúe compra(s) de servicio(s) exitosamente.
								</p>
							</section>
						</div>
					</section>
				</div>

				<div className='bg-[#C79936]'>
					<section className='max-w-screen-xl mx-auto grid place-items-center gap-10 py-16'>
						<h1 className='text-3xl font-bold text-white'>
							¿Estas listo para ganar increíbles comisiones y ser parte de nuestros
							afiliados?
						</h1>
						<button className='bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold shadow-xl hover:shadow-none'>
							Quiero afiliarme
						</button>
					</section>
				</div>
			</div>
		</Layout>
	)
}
