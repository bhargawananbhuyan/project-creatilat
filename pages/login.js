import React from 'react'
import Layout from '../src/components/layout/Layout'
import SEO from '../src/components/layout/SEO'
import LoginForm from '../src/components/auth/LoginForm'
import RegisterForm from '../src/components/auth/RegisterForm'
import Image from 'next/image'

export default function Login() {
	const [active, setActive] = React.useState(1)

	return (
		<Layout>
			<SEO title='Iniciar Sesión' />
			<article className='grid grid-cols-2 gap-x-20'>
				<section>
					<div className='max-w-2xl h-full bg-gray-200 relative'>
						<Image
							src={`/assets/${active === 1 ? 'login' : 'register'}-1.jpg`}
							layout='fill'
							className='absolute object-cover'
							alt=''
						/>
					</div>
				</section>
				{active === 1 ? (
					<LoginForm active={active} setActive={setActive} />
				) : (
					<RegisterForm active={active} setActive={setActive} />
				)}
			</article>
		</Layout>
	)
}
