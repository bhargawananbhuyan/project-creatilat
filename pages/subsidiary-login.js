import React from 'react'
import Layout from '../src/components/layout/Layout'
import SEO from '../src/components/layout/SEO'
import LoginForm from '../src/components/auth/LoginForm'
import RegisterForm from '../src/components/auth/RegisterForm'
import Image from 'next/image'

export default function SubsidiaryLogin() {
	const [active, setActive] = React.useState(1)

	return (
		<Layout>
			<SEO title='Iniciar Sesión' />
			<article className='grid md:grid-cols-2 gap-x-20'>
				<div className='md:hidden'>
					<Image
						src={`/assets/${active === 1 ? 'envases' : 'embalaje'}.jpg`}
						layout='fill'
						className='absolute object-cover z-[-1] top-0 left-0'
						alt=''
					/>
				</div>

				<section>
					<div className='max-w-2xl h-full bg-gray-200 relative'>
						<Image
							src={`/assets/${active === 1 ? 'envases' : 'embalaje'}.jpg`}
							layout='fill'
							className='absolute object-cover'
							alt=''
						/>
					</div>
				</section>
				<div className='z-[100]'>
					{active === 1 ? (
						<LoginForm
							active={active}
							setActive={setActive}
							title={'Inicio de sesión para afiliados activos'}
						/>
					) : (
						<RegisterForm
							active={active}
							setActive={setActive}
							title={'Regístrate en nuestro Programa de Afiliados'}
							subtitle={
								'Empieza a ganar atractivas comisiones en tres sencillos pasos.'
							}
						/>
					)}
				</div>
			</article>
		</Layout>
	)
}
