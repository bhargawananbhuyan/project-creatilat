import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
	return (
		<Layout>
			<SEO title='Datos de facturacion' />
			<article className='grid grid-cols-2 gap-x-20'>
				<section>
					<div className='max-w-2xl h-full bg-gray-200 relative'>
						<Image
							src={'/assets/datos.jpg'}
							layout='fill'
							className='absolute object-cover'
							alt=''
						/>
					</div>
				</section>

				<section className='max-w-lg w-full grid gap-12 pt-12 pb-20'>
					<section className='grid gap-2.5'>
						<h1 className='text-[1.75rem] font-extrabold leading-normal'>
							Completa los datos para <br /> Generar tu factura
						</h1>
						<p>Asegúrate de llenar todos los campos correctamente.</p>
					</section>

					<form className='grid gap-2.5'>
						<input
							placeholder='Razón Social'
							className='border px-5 py-2.5 outline-none rounded-lg'
						/>
						<input
							placeholder='RFC'
							className='border px-5 py-2.5 outline-none rounded-lg'
						/>
						<input
							placeholder='Dirección'
							className='border px-5 py-2.5 outline-none rounded-lg'
						/>
						<input
							placeholder='Teléfono'
							className='border px-5 py-2.5 outline-none rounded-lg'
						/>
						<input
							placeholder='Correo electrónico para enviar tu factura'
							className='border px-5 py-2.5 outline-none rounded-lg'
						/>

						<label
							htmlFor='register-checkbox'
							className='flex items-center gap-2.5 mt-5'
						>
							<input id='register-checkbox' type='checkbox' />
							<div className='text-sm text-gray-500 leading-relaxed'>
								Declaro que soy mayor de edad, acepto los{' '}
								<Link href={'/terminos-y-condiciones'}>
									<a className='text-blue-500 underline'>
										términos y condiciones
									</a>
								</Link>{' '}
								y autorizo el uso de mis datos de acuerdo a la{' '}
								<Link href={'/politicas-de-privacidad'}>
									<a className='text-blue-500 underline'>
										Declaración de Privacidad
									</a>
								</Link>
								.
							</div>
						</label>

						<button
							type='submit'
							className='bg-gray-800 py-3.5 rounded-full text-white mt-5 shadow-xl hover:shadow-none font-semibold'
						>
							Facturar
						</button>
					</form>
				</section>
			</article>
		</Layout>
	)
}
