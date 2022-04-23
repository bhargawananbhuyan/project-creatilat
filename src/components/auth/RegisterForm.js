import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function RegisterForm({
	active,
	setActive,
	title = 'Regístrate',
	subtitle = 'Nuestro equipo de expertos está a su disposición para ayudarle',
}) {
	return (
		<section className='max-w-lg w-full grid gap-10 pt-12 pb-20'>
			<section className='grid gap-2.5'>
				<h1 className='text-3xl font-bold leading-normal'>{title}</h1>
				<p>{subtitle}</p>
			</section>

			<div className='flex gap-10'>
				<button
					className={`${
						active === 1
							? 'underline underline-offset-[5px] decoration-blue-500 decoration-[3.5px]'
							: ''
					}`}
					onClick={() => setActive(1)}
				>
					Iniciar Sesión
				</button>
				<button
					className={`${
						active === 2
							? 'underline underline-offset-[5px] decoration-blue-500 decoration-[3.5px]'
							: ''
					}`}
					onClick={() => setActive(2)}
				>
					Registrarse
				</button>
			</div>
			<div className='grid gap-2.5 text-sm'>
				<button className='py-3.5 px-5 bg-gray-100 rounded-lg text-left flex items-center gap-3.5'>
					<FontAwesomeIcon icon={faGoogle} className='text-lg' />{' '}
					<span>Regístrate con Google</span>
				</button>
				<button className='py-3.5 px-5 bg-gray-100 rounded-lg text-left flex items-center gap-3.5'>
					<FontAwesomeIcon icon={faFacebookF} className='text-lg text-blue-500' />{' '}
					<span>Regístrate con Facebook</span>
				</button>
			</div>

			<div className='_divider'>O completa tus datos</div>

			<form className='grid gap-2.5'>
				<input
					placeholder='Nombre(s)'
					className='border px-5 py-2.5 outline-none rounded-lg'
				/>
				<input
					placeholder='Apellido(s)'
					className='border px-5 py-2.5 outline-none rounded-lg'
				/>
				<input
					placeholder='Correo electrónico'
					className='border px-5 py-2.5 outline-none rounded-lg'
				/>
				<input
					placeholder='Contraseña'
					className='border px-5 py-2.5 outline-none rounded-lg'
				/>
				<input
					placeholder='Confirmar contraseña'
					className='border px-5 py-2.5 outline-none rounded-lg'
				/>

				<label htmlFor='register-checkbox' className='flex items-center gap-2.5 mt-5'>
					<input id='register-checkbox' type='checkbox' />
					<div className='text-sm'>
						Declaro que soy mayor de edad, acepto los términos y condiciones y autorizo
						el uso de mis datos de acuerdo a la Declaración de Privacidad.
					</div>
				</label>

				<button
					type='submit'
					className='bg-gray-800 py-3.5 rounded-full text-white mt-8 shadow-xl hover:shadow-none'
				>
					Registrarme
				</button>
			</form>
		</section>
	)
}
