import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'

const Index = () => {
	return (
		<Layout>
			<SEO title='Perfil' />

			<div className='bg-gray-200 py-14'>
				<div className='bg-white'>
					<article className='max-w-lg mx-auto py-10 grid gap-5 place-items-center'>
						<div className='h-[150px] w-[150px] bg-gray-200 rounded-full' />
						<section className='text-center grid gap-2'>
							<h1 className='text-xl font-bold'>María Abdo</h1>
							<p className='text-2xl text-gray-400 font-light'>maria@gmail.com</p>
						</section>

						<div className='h-[1px] w-full bg-gray-300' />

						<div className='flex items-center gap-2.5 text-sm text-blue-500 justify-self-end'>
							<FontAwesomeIcon icon={faPen} />
							<span>Editar Perfil</span>
						</div>

						<section className='grid gap-1.5'>
							<div className='grid grid-cols-2 gap-10'>
								<span className='text-right'>Nombre</span>
								<span>María Abdo</span>
							</div>
							<div className='grid grid-cols-2 gap-10'>
								<span className='text-right'>Correo electrónico</span>
								<span>maria@gmail.com</span>
							</div>
							<div className='grid grid-cols-2 gap-10'>
								<span className='text-right'>Teléfono de contacto</span>
								<span>55 5555 5555</span>
							</div>
							<div className='grid grid-cols-2 gap-10'>
								<span className='text-right'>Datos de pago</span>
								<span>***********945</span>
							</div>

							<button className='bg-black text-white py-2.5 rounded-full mt-8 shadow-xl hover:shadow-none transition-all'>
								Aceptar
							</button>
						</section>
					</article>
				</div>
			</div>
		</Layout>
	)
}

export default Index
