import React from 'react'
import Layout from '../src/components/layout/Layout'
import Image from 'next/image'

export default function ForgotPassword() {
	return (
		<Layout>
			<article className='mt-16 md:mt-32 grid md:grid-cols-2'>
				<section className='bg-white mt-10 mb-20 md:my-0 md:bg-transparent max-w-md mx-auto grid gap-10 px-5 py-10 md:py-[150px]'>
					<section className='grid gap-2.5'>
						<h1 className='text-2xl text-center md:text-left md:text-3xl font-bold leading-normal'>
							¿Olvidaste tu contraseña?
						</h1>
						<p>Ingresa tu correo electrónico para verificar tu cuenta.</p>
					</section>
					<form className='grid gap-3.5'>
						<input
							placeholder='Correo electrónico'
							className='border px-5 py-2.5 outline-none rounded-lg'
						/>
						<button className='bg-gray-800 py-3.5 rounded-full text-white mt-5 shadow-xl hover:shadow-none font-semibold'>
							Recuperar
						</button>
						<div className='mt-5 text-center font-semibold'>
							No recibí el Código de Verificación
						</div>
					</form>
				</section>

				<div className='md:hidden z-[-1]'>
					<Image
						src={'/assets/cafe.png'}
						layout='fill'
						className='absolute object-cover'
						alt=''
					/>
				</div>

				<div className='hidden md:block h-full w-full bg-gray-200 relative'>
					<Image
						src={'/assets/cafe.png'}
						layout='fill'
						className='absolute object-cover'
						alt=''
					/>
				</div>
			</article>
		</Layout>
	)
}
