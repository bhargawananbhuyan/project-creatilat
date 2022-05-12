import React from 'react'
import Image from 'next/image'

function LoginForm({
	active,
	setActive,
	title = 'Conéctate y obtén todos los beneficios de nuestros servicios',
}) {
	return (
		<section className='max-w-lg w-full grid gap-8 md:gap-12 mt-10 mb-20 md:my-0 py-10 md:pt-12 md:pb-20 px-5 bg-white place-items-center md:place-items-start'>
			<h1 className='text-xl md:text-[1.75rem] font-extrabold leading-normal text-center md:text-left'>
				{title}
			</h1>

			<div className='flex gap-10'>
				<button
					className={`font-semibold ${
						active === 1
							? 'underline underline-offset-[5px] decoration-blue-500 decoration-[3.5px]'
							: ''
					}`}
					onClick={() => setActive(1)}
				>
					Iniciar Sesión
				</button>
				<button
					className={`font-semibold ${
						active === 2
							? 'underline underline-offset-[5px] decoration-blue-500 decoration-[3.5px]'
							: ''
					}`}
					onClick={() => setActive(2)}
				>
					Registrarse
				</button>
			</div>
			<div className='grid gap-2.5 text-sm w-full'>
				<button className='py-3.5 px-5 bg-gray-100 rounded-lg text-left flex items-center gap-3.5'>
					<div className='h-[21px] w-[21px] relative'>
						<Image
							src={'/assets/google.png'}
							layout='fill'
							className='absolute object-contain'
							alt=''
						/>
					</div>
					<span>Inicia Sesión con Google</span>
				</button>
				<button className='py-3.5 px-5 bg-gray-100 rounded-lg text-left flex items-center gap-3.5'>
					<div className='h-[21px] w-[21px] relative'>
						<Image
							src={'/assets/facebook.png'}
							layout='fill'
							className='absolute object-contain'
							alt=''
						/>
					</div>
					<span>Inicia Sesión con Facebook</span>
				</button>
			</div>

			<form className='grid gap-2.5 w-full'>
				<input
					placeholder='Correo electrónico'
					className='border px-5 py-2.5 outline-none rounded-lg'
				/>
				<input
					placeholder='Contraseña'
					className='border px-5 py-2.5 outline-none rounded-lg'
				/>
				<button
					type='submit'
					className='bg-gray-800 py-3.5 rounded-full text-white mt-5 shadow-xl hover:shadow-none font-semibold'
				>
					Iniciar Sesión
				</button>
			</form>
		</section>
	)
}

export default LoginForm
