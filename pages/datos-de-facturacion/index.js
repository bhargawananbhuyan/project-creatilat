import React from 'react'
import Layout from '../../src/components/layout/Layout'
import LoginForm from '../../src/components/auth/LoginForm'
import SEO from '../../src/components/layout/SEO'

export default function Index() {
	return (
		<Layout>
			<SEO title='Datos de facturacion' />
			<article className='grid grid-cols-2 gap-24 max-w-screen-xl mx-auto'>
				<section>
					<div className='max-w-lg h-full bg-gray-200' />
				</section>

				<section className='max-w-lg w-full grid gap-12 pt-12 pb-20'>
					<section className='grid gap-2.5'>
						<h1 className='text-3xl font-bold leading-normal'>
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
							<div className='text-sm'>
								Declaro que soy mayor de edad, acepto los términos y condiciones y
								autorizo el uso de mis datos de acuerdo a la Declaración de
								Privacidad.
							</div>
						</label>

						<button
							type='submit'
							className='bg-gray-800 py-3.5 rounded-full text-white mt-5 shadow-xl hover:shadow-none'
						>
							Facturar
						</button>
					</form>
				</section>
			</article>
		</Layout>
	)
}
