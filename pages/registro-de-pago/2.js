import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import InputField from '../../src/components/layout/InputField'
import Image from 'next/image'

const Stepper = ({ titles, active, done, setActive, setDone }) => {
	return (
		<div className='flex gap-x-10'>
			{titles?.map((title, i) => (
				<label
					key={i}
					htmlFor={`registroStep-${i}`}
					className='flex items-center gap-x-2 text-sm font-semibold cursor-pointer'
				>
					<span
						className={`h-[30px] w-[30px] ${
							active === i || done.includes(i) ? 'bg-black' : 'bg-gray-300'
						} text-white rounded-full grid place-items-center`}
					>
						{i + 1}
					</span>
					<span
						className={`${
							active === i || done.includes(i) ? 'text-black' : 'text-gray-300'
						}`}
					>
						{title}
					</span>
					<input
						id={`registroStep-${i}`}
						type='radio'
						value={i}
						checked={active === i}
						onChange={() => {
							setActive(i)
							setDone(Array.from(Array(i + 1).keys()))
						}}
						className='hidden'
					/>
				</label>
			))}
		</div>
	)
}

const Cart = () => {
	const [active, setActive] = React.useState(0)
	const [done, setDone] = React.useState([0])
	const [cantidad, setCantidad] = React.useState(1)
	const [paymentType, setPaymentType] = React.useState(0)
	const [loading, _] = React.useState(false)

	return (
		<Layout>
			<SEO />

			{loading ? (
				<div className='grid place-items-center pt-16 pb-32 gap-y-10'>
					<h1 className='text-4xl font-bold'>Estamos procesando tu pago</h1>
					<div className='h-[300px] w-[450px] bg-gray-200 relative'>
						<Image
							src={'/assets/loading.jpg'}
							layout='fill'
							className='absolute object-contain'
						/>
					</div>
				</div>
			) : (
				<>
					{active === 0 || active === 1 ? (
						<div className='grid grid-cols-2 xl:grid-cols-5'>
							<div className='xl:col-span-3 max-w-2xl w-full mx-auto py-20'>
								<div className='grid place-items-center'>
									<Stepper
										titles={['Pedido', 'Pago', 'Comienza tu orden']}
										active={active}
										done={done}
										setActive={setActive}
										setDone={setDone}
									/>
								</div>

								{active === 0 && (
									<div className='mt-14'>
										<section className='grid gap-y-5'>
											<h2 className='text-2xl font-bold'>Mi carrito</h2>
											<div className='flex gap-x-20 items-start'>
												<section className='flex items-center gap-x-8'>
													<div className='h-[120px] w-[120px] bg-gray-200 flex-shrink-0 relative'>
														<Image
															src={'/assets/pink-dummy.jpg'}
															layout='fill'
															className='absolute'
														/>
													</div>
													<section className='grid gap-y-2.5'>
														<h6 className='text-lg font-bold'>
															Logotipo + Flyer
														</h6>
														<p className='text-sm leading-relaxed'>
															Lorem Ipsum is simply dummy text Lorem
															Ipsum is simply dummy text Lorem Ipsum
															is simply dummy text Lorem Ipsum is
															simply dummy text.
														</p>
													</section>
												</section>
												<div className='flex gap-x-2.5 items-center'>
													<label htmlFor='cantidad'>Cantidad</label>
													<select
														id='cantidad'
														value={cantidad}
														onChange={(e) =>
															setCantidad(e.target.value)
														}
														className='bg-gray-200 p-2 rounded outline-none w-[60px]'
													>
														<option value={1}>1</option>
														<option value={2}>2</option>
														<option value={3}>3</option>
														<option value={4}>4</option>
													</select>
													<h6 className='ml-6'>${cantidad * 100}</h6>
												</div>
											</div>
											<button className='text-blue-500 flex items-center gap-x-2.5 justify-self-end'>
												<FontAwesomeIcon icon={faTrash} />
												<span>Eliminar</span>
											</button>
										</section>

										<hr className='my-5' />

										<section className='grid gap-3.5'>
											<h2 className='text-xl font-bold'>¿Necesitas ayuda?</h2>
											<p>
												Por favor contacta a nuestro{' '}
												<span className='text-blue-500'>
													Servicio al Cliente
												</span>
											</p>
										</section>
									</div>
								)}
								{active === 1 && (
									<div className='mt-14 grid gap-y-10'>
										<section>
											<div className='grid gap-y-3.5'>
												<div className='flex items-center justify-between'>
													<h2 className='text-2xl font-bold'>Envío</h2>
													<button className='text-blue-500 flex items-center gap-x-2.5'>
														<FontAwesomeIcon icon={faPen} />
														<span>Editar</span>
													</button>
												</div>
												<hr />
												<p>Dirección de envío</p>
											</div>
										</section>
										<section className='grid gap-y-3.5'>
											<h2 className='text-2xl font-bold'>Pago</h2>
											<hr />

											<div className='grid gap-y-8 mt-5'>
												<div className='flex items-center justify-between'>
													<label
														htmlFor='card-payment'
														className='flex items-center gap-x-2 px-5 cursor-pointer'
													>
														<input
															id='card-payment'
															type='radio'
															value={0}
															onChange={() => setPaymentType(0)}
															checked={paymentType === 0}
														/>
														<span className='mt-[-3.5px]'>
															Tarjeta de crédito o débito
														</span>
													</label>

													<div className='flex items-center gap-x-2.5'>
														{Array.from(Array(3).keys()).map((i) => (
															<div className='h-[45px] w-[60px] relative'>
																<Image
																	src={`/assets/card-${
																		i + 1
																	}.png`}
																	layout='fill'
																	alt=''
																	className='absolute object-contain'
																/>
															</div>
														))}
													</div>
												</div>

												{paymentType === 0 && (
													<form className='max-w-sm text-sm grid gap-2.5 px-5'>
														<InputField placeholder='Nombre(s) de la Tarjeta' />
														<InputField placeholder='Número de la tarjeta' />
														<div className='flex items-center gap-x-2.5'>
															<InputField placeholder='Fecha de vencimiento' />
															<InputField placeholder='CVC' />
														</div>
													</form>
												)}
												<hr />

												<div className='flex items-center justify-between'>
													<label
														htmlFor='oxxo-payment'
														className='flex items-center gap-x-2 px-5 cursor-pointer'
													>
														<input
															id='oxxo-payment'
															type='radio'
															value={1}
															onChange={() => setPaymentType(1)}
															checked={paymentType === 1}
														/>
														<span className='mt-[-3.5px]'>
															Pago en efectivo
														</span>
													</label>
													<div className='h-[45px] w-[60px] relative'>
														<Image
															src={`/assets/oxxo.png`}
															layout='fill'
															alt=''
															className='absolute object-contain'
														/>
													</div>
												</div>
												<hr />

												<h2 className='text-lg font-bold'>
													¿Deseas facturar?{' '}
													<span className='text-blue-500 underline'>
														Da click aquí
													</span>
												</h2>
												<div className='grid place-items-center mt-5'>
													<button className='bg-black text-white font-semibold px-14 py-2.5 rounded-full'>
														Comprar
													</button>
												</div>
											</div>
										</section>
									</div>
								)}
							</div>
							<div className='bg-gray-200 xl:col-span-2 p-10'>
								<section className='grid gap-5'>
									<h1 className='text-4xl font-bold'>Resumen del pedido</h1>
									<hr className='border-t border-gray-300' />
									<div>
										<div className='flex items-center justify-between'>
											<span>Subtotal</span>
											<span>$100</span>
										</div>
										<div className='flex items-center justify-between'>
											<span>Envío</span>
											<span>GRATIS</span>
										</div>
									</div>
									<hr className='border-t border-gray-300' />
									<div className='flex items-center justify-between text-lg font-bold'>
										<span>Total Estimado</span>
										<span>$100</span>
									</div>
									<button className='bg-black text-white py-2.5 font-semibold rounded-full mt-5'>
										Finalizar compra
									</button>
								</section>

								<section>
									{active === 0 ? (
										<div className='grid gap-y-5 mt-10'>
											<div className='grid gap-y-2.5 text-sm'>
												<h6>Tarjeta de débito o crédito</h6>
												<div className='flex gap-x-5'>
													{Array.from(Array(3).keys()).map((i) => (
														<div
															key={i}
															className='h-[45px] w-[60px] relative'
														>
															<Image
																src={`/assets/card-${i + 1}.png`}
																layout='fill'
																className='absolute object-contain'
															/>
														</div>
													))}
												</div>
											</div>
											<div className='grid gap-y-2.5 text-sm'>
												<h6>Efectivo</h6>
												<div className='h-[45px] w-[60px] relative'>
													<Image
														src={`/assets/oxxo.png`}
														layout='fill'
														className='absolute object-contain'
													/>
												</div>
											</div>
										</div>
									) : active === 1 ? (
										<div className='bg-white px-10 py-8 grid gap-y-8 mt-10'>
											<h5 className='text-lg'>Resumen del carrito</h5>
											<section className='flex items-center gap-x-5'>
												<div className='h-[120px] w-[120px] bg-gray-200 flex-shrink-0 relative'>
													<Image
														src={'/assets/pink-dummy.jpg'}
														layout='fill'
														className='absolute'
													/>
												</div>
												<section className='grid gap-y-2.5'>
													<h6 className='font-bold'>Logotipo + Flyer</h6>
													<p className='text-sm'>
														Lorem Ipsum is simply dummy text Lorem Ipsum
														is simply dummy text Lorem Ipsum is simply
														dummy text Lorem Ipsum is simply dummy text.
													</p>
													<div className='text-sm'>
														<div>Cantidad: 1</div>
														<div>$3,799.00</div>
													</div>
												</section>
											</section>
										</div>
									) : (
										<></>
									)}
								</section>
							</div>
						</div>
					) : (
						<div className='max-w-screen-xl mx-auto grid place-items-center gap-y-14 pt-10 pb-20'>
							<Stepper
								titles={['Pedido', 'Pago', 'Comienza tu orden']}
								active={active}
								done={done}
								setActive={setActive}
								setDone={setDone}
							/>

							<section className='grid gap-y-3.5 text-center'>
								<h1 className='text-4xl font-bold'>¡Pago exitoso!</h1>
								<p>Te hemos enviado tu formulario.</p>
							</section>
							<div className='w-[450px] h-[300px] bg-gray-200 relative'>
								<Image
									src={'/assets/exit.jpg'}
									layout='fill'
									className='absolute object-contain'
								/>
							</div>
							<button className='bg-black text-white px-14 py-3.5 font-semibold rounded-full'>
								Continuar
							</button>
						</div>
					)}
				</>
			)}
		</Layout>
	)
}

export default Cart
