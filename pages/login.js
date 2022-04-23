import React from 'react'
import Layout from '../src/components/layout/Layout'
import SEO from '../src/components/layout/SEO'
import LoginForm from '../src/components/auth/LoginForm'
import RegisterForm from '../src/components/auth/RegisterForm'

export default function Login() {
	const [active, setActive] = React.useState(1)

	return (
		<Layout>
			<SEO title='Iniciar Sesión' />
			<article className='grid grid-cols-2 gap-24 max-w-screen-xl mx-auto'>
				<section>
					<div className='max-w-lg h-full bg-gray-200' />
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
