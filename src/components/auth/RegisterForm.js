import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../layout/Modal'
import axios from 'axios'
import { url } from '../../utils/constants'

export default function RegisterForm({
	active,
	setActive,
	title = 'Regístrate',
	subtitle = 'Nuestro equipo de expertos está a su disposición para ayudarle',
}) {
	const [formData, setFormData] = React.useState({
		nombre: '',
		apedillo: '',
		email: '',
		password: '',
		confirmPassword: '',
		termsChecked: false,
	})
	const [dialog, setDialog] = React.useState({ open: false, message: '' })
	const handleDialogClose = () => setDialog({ open: false, message: '' })
	const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
	const [loading, setLoading] = React.useState(false)

	const handleFormSubmit = async (e) => {
		e.preventDefault()

		if (formData.password !== formData.confirmPassword) {
			setDialog({ open: true, message: "Passwords don't match" })
			return
		}

		if (!formData.termsChecked) {
			setDialog({ open: true, message: 'You need to check terms and conditions.' })
			return
		}

		setLoading(true)
		try {
			const res = await axios.post(`${url}/api/security/Register`, {
				Name: formData.nombre,
				LastName: formData.apedillo,
				Email: formData.email,
				Password: formData.password,
				ConfirmPassword: formData.confirmPassword,
			})
			setDialog({ open: true, message: res.data?.Message })
			setLoading(false)
			setFormData({
				nombre: '',
				apedillo: '',
				email: '',
				password: '',
				confirmPassword: '',
				termsChecked: false,
			})
		} catch (error) {
			setDialog({ open: true, message: error?.response?.data?.detail })
			setLoading(false)
		}
	}

	return (
		<section className='max-w-lg w-full grid gap-10 py-10 mt-10 mb-20 md:pt-12 md:pb-20 px-5 bg-white place-items-center md:place-items-start'>
			<section className='grid gap-2.5 text-center md:text-left'>
				<h1 className='text-xl md:text-[1.75rem] font-extrabold leading-normal'>{title}</h1>
				<p>{subtitle}</p>
			</section>

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
					<span>Regístrate con Google</span>
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
					<span>Regístrate con Facebook</span>
				</button>
			</div>

			<div className='_divider w-full'>O completa tus datos</div>

			<form className='grid gap-2.5' onSubmit={handleFormSubmit}>
				<input
					placeholder='Nombre(s)'
					name='nombre'
					className='border px-5 py-2.5 outline-none rounded-lg'
					required
					value={formData.nombre}
					onChange={handleInputChange}
				/>
				<input
					placeholder='Apellido(s)'
					name='apedillo'
					required
					className='border px-5 py-2.5 outline-none rounded-lg'
					value={formData.apedillo}
					onChange={handleInputChange}
				/>
				<input
					placeholder='Correo electrónico'
					name='email'
					required
					className='border px-5 py-2.5 outline-none rounded-lg'
					value={formData.email}
					onChange={handleInputChange}
				/>
				<input
					placeholder='Contraseña'
					name='password'
					required
					type='password'
					className='border px-5 py-2.5 outline-none rounded-lg'
					value={formData.password}
					onChange={handleInputChange}
				/>
				<input
					placeholder='Confirmar contraseña'
					name='confirmPassword'
					required
					type='password'
					className='border px-5 py-2.5 outline-none rounded-lg'
					value={formData.confirmPassword}
					onChange={handleInputChange}
				/>

				<label htmlFor='register-checkbox' className='flex items-center gap-2.5 mt-5'>
					<input
						id='register-checkbox'
						type='checkbox'
						checked={formData.termsChecked}
						value={formData.termsChecked}
						onChange={() =>
							setFormData({ ...formData, termsChecked: !formData.termsChecked })
						}
					/>
					<div className='text-sm leading-relaxed'>
						Declaro que soy mayor de edad, acepto los{' '}
						<Link href={'/terminos-y-condiciones'}>
							<a className='text-blue-500 underline'>términos y condiciones</a>
						</Link>{' '}
						y autorizo el uso de mis datos de acuerdo a la{' '}
						<Link href={'/politicas-de-privacidad'}>
							<a className='text-blue-500 underline'>Declaración de Privacidad</a>
						</Link>
						.
					</div>
				</label>

				<button
					type='submit'
					disabled={!formData.termsChecked}
					className='bg-gray-800 disabled:bg-gray-600 py-3.5 rounded-full text-white mt-8 shadow-xl disabled:hover:shadow-xl hover:shadow-none'
				>
					{`Registrarme${loading ? '...' : ''}`}
				</button>
			</form>

			<Modal open={dialog.open} handleClose={handleDialogClose} message={dialog.message} />
		</section>
	)
}
