import React from 'react'

import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'

const InputField = ({ type = 'input', placeholder, additionalClasses = '', ...rest }) =>
	type === 'textarea' ? (
		<textarea
			placeholder={placeholder}
			className={`w-full bg-gray-100 border-2 border-transparent focus:border-2 focus:border-blue-300 
                px-5 py-3 rounded-md outline-none resize-none ${additionalClasses}`}
			rows={3}
			{...rest}
		></textarea>
	) : (
		<input
			placeholder={placeholder}
			className={`w-full border-2 border-transparent bg-gray-100 px-5 py-3 rounded-md outline-none 
                focus:border-2 focus:border-blue-300 ${additionalClasses}`}
			{...rest}
		/>
	)

const SubmitButton = ({ text, additionalClasses = '' }) => (
	<button
		className={`bg-gray-800 py-2.5 rounded-full text-white shadow-xl font-semibold hover:shadow-none ${additionalClasses}`}
	>
		{text}
	</button>
)

export default function Contacto() {
	return (
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
						<div className='w-full h-[400px] bg-gray-200' />
					</div>
					<form className='flex flex-col gap-10'>
						<h1 className='text-3xl font-bold'>Ponte en contacto con nosotros</h1>
						<div className='grid'>
							<div className='grid grid-cols-2 gap-3.5 text-sm'>
								<InputField placeholder='Nombre*' />
								<InputField placeholder='Apellido*' />
								<InputField placeholder='Email*' />
								<InputField placeholder='Teléfono*' />
								<InputField
									placeholder='Nombre de la empresa'
									additionalClasses='col-span-2'
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
							/>
						</div>
						<SubmitButton text='Enviar' />
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
							<div className='h-[140px] w-[140px] bg-gray-200' />
							<div>
								<h3 className='font-bold'>{label}</h3>
								<p className='text-sm text-gray-500 mt-2'>{value}</p>
							</div>
						</section>
					))}
				</section>
			</div>
		</Layout>
	)
}
