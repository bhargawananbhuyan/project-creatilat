import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import RegisterForm from '../../src/components/auth/RegisterForm'
import LoginForm from '../../src/components/auth/LoginForm'
import Image from 'next/image'

export default function Index() {
	const [active, setActive] = React.useState(2)

	return (
		<Layout>
			<SEO title='Registro de Pago' />
			<article className='grid md:grid-cols-2 gap-x-20'>
				<div className='max-w-screen-sm mx-auto md:pl-8 z-[100]'>
					{active === 1 ? (
						<LoginForm active={active} setActive={setActive} />
					) : (
						<RegisterForm
							title='Estas a unos pasos de tener tu compra'
							subtitle='Completa tu registro para continuar tu compra.'
							active={active}
							setActive={setActive}
						/>
					)}
				</div>

				<div className='md:hidden'>
					<Image
						src={`/assets/disco.png`}
						layout='fill'
						className='absolute object-cover top-0 left-0 z-[-1]'
						alt=''
					/>
				</div>

				<div className='bg-gray-200 relative'>
					<Image
						src={`/assets/disco.png`}
						layout='fill'
						className='absolute object-cover'
						alt=''
					/>
				</div>
			</article>
		</Layout>
	)
}
