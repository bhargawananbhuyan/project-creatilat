import axios from 'axios'
import React from 'react'
import InputField from '../../src/components/layout/InputField'
import Layout from '../../src/components/layout/Layout'
import Modal from '../../src/components/layout/Modal'
import SEO from '../../src/components/layout/SEO'
import { url } from '../../src/utils/constants'
import Image from 'next/image'

const SubmitButton = ({ text, additionalClasses = '', ...rest }) => (
	<button
		{...rest}
		className={`bg-gray-800 py-2.5 rounded-full text-white shadow-xl font-semibold hover:shadow-none ${additionalClasses}`}
	>
		{text}
	</button>
)

export default function Contacto() {
	const [dialog, setDialog] = React.useState({
		open: false,
		message: '',
	})
	const [formData, setFormData] = React.useState({
		nombre: '',
		apedillo: '',
		email: '',
		telefono: '',
		nombreEmpresa: '',
		description: '',
	})

	const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
	const handleDialogClose = () => setDialog({ open: false, message: '' })
	const [loading, setLoading] = React.useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()

		setLoading(true)
		try {
			const res = await axios.post(`${url}/api/ContactForm/Create`, {
				Name: formData.nombre,
				LastName: formData.apedillo,
				Email: formData.email,
				Number: formData.telefono,
				CompanyName: formData.nombreEmpresa,
				ProjectDescription: formData.description,
			})
			setLoading(false)
			setDialog({
				open: true,
				message: res.data?.Success
					? 'Message sent successfully'
					: 'Error! Please try later',
			})
			setFormData({
				nombre: '',
				apedillo: '',
				email: '',
				telefono: '',
				nombreEmpresa: '',
				description: '',
			})
		} catch (error) {
			setLoading(false)
			setDialog({ open: true, message: 'Bad request. Please try again.' })
		}
	}

	return (
		<>
			<Layout>
				<SEO title='Contacto' />
				<div className='max-w-screen-xl mx-auto'>
					<div className='grid grid-cols-2 gap-16 py-10 items-center'>
						<div className='grid gap-10'>
							<section className='max-w-xl grid gap-5'>
								<h1 className='text-3xl font-bold'>Contacto</h1>
								<p>
									Queremos ayudarte a desarrollar tu proyecto con éxito. Llena el
									siguiente formulario y un miembro de nuestro equipo se pondrá en
									contacto contigo lo antes posible.
								</p>
							</section>
							<div className='w-full h-[400px] relative'>
								<Image
									src={'/assets/contacto.png'}
									layout='fill'
									alt=''
									className='absolute top-0 left-0'
								/>
							</div>
						</div>
						<form className='flex flex-col gap-10' onSubmit={handleSubmit}>
							<h1 className='text-3xl font-bold'>Ponte en contacto con nosotros</h1>
							<div className='grid'>
								<div className='grid grid-cols-2 gap-3.5 text-sm'>
									<InputField
										placeholder='Nombre*'
										name='nombre'
										required
										value={formData.nombre}
										onChange={handleChange}
									/>
									<InputField
										placeholder='Apellido*'
										name='apedillo'
										required
										value={formData.apedillo}
										onChange={handleChange}
									/>
									<InputField
										type='email'
										placeholder='Email*'
										name='email'
										required
										value={formData.email}
										onChange={handleChange}
									/>
									<InputField
										placeholder='Teléfono*'
										name='telefono'
										required
										value={formData.telefono}
										onChange={handleChange}
									/>
									<InputField
										placeholder='Nombre de la empresa'
										additionalClasses='col-span-2'
										name='nombreEmpresa'
										required
										value={formData.nombreEmpresa}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className='grid gap-3.5'>
								<label htmlFor='contacto-description' className='font-bold ml-2.5'>
									Describe tu proyecto
								</label>
								<InputField
									id='contacto-description'
									type='textarea'
									placeholder='Platícanos un poco sobre tu proyecto.'
									name='description'
									required
									value={formData.description}
									onChange={handleChange}
								/>
							</div>
							<SubmitButton text={`Enviar${loading ? '...' : ''}`} type='submit' />
						</form>
					</div>
					<section className='grid grid-cols-3 place-items-center py-16'>
						{[
							{
								img: '',
								label: 'Email',
								value: 'contacto@creatilat.com',
							},
							{
								img: '',
								label: 'Nuestras oficinas',
								value: 'Puebla, México',
							},
							{
								img: '',
								label: 'Teléfono',
								value: '22 1336 3624',
							},
						].map(({ label, value }, i) => (
							<section key={i} className='grid place-items-center gap-5 text-center'>
								<div className='h-[125px] w-[125px] bg-gray-200 relative'>
									<Image
										src={`/assets/contacto-${i + 1}.png`}
										layout='fill'
										className='absolute'
										alt=''
									/>
								</div>
								<div>
									<h3 className='font-bold'>{label}</h3>
									<p className='text-sm text-gray-500 mt-2'>{value}</p>
								</div>
							</section>
						))}
					</section>
				</div>

				<Modal
					open={dialog.open}
					handleClose={handleDialogClose}
					message={dialog.message}
				/>
			</Layout>
		</>
	)
}
