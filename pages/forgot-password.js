import React from 'react'
import Layout from '../src/components/layout/Layout'

export default function ForgotPassword() {
	return (
		<Layout>
			<article className='grid grid-cols-2 max-w-screen-xl mx-auto'>
				<section className='max-w-md grid gap-10 px-5 py-[150px]'>
					<section className='grid gap-2.5'>
						<h1 className='text-3xl font-bold leading-normal'>
							¿Olvidaste tu contraseña?
						</h1>
						<p>Ingresa tu correo electrónico para verificar tu cuenta.</p>
					</section>
					<form className='grid gap-3.5'>
						<input
							placeholder='Correo electrónico'
							className='border px-5 py-2.5 outline-none rounded-lg'
						/>
						<button className='bg-gray-800 py-3.5 rounded-full text-white mt-5 shadow-xl hover:shadow-none'>
							Recuperar
						</button>
						<div className='mt-5 text-center font-semibold'>
							No recibí el Código de Verificación
						</div>
					</form>
				</section>
				<div className='h-full w-full bg-gray-200' />
			</article>
		</Layout>
	)
}
