import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import RegisterForm from '../../src/components/auth/RegisterForm'
import LoginForm from '../../src/components/auth/LoginForm'

export default function Index() {
	const [active, setActive] = React.useState(2)

	return (
		<Layout>
			<SEO title='Registro de Pago' />
			<article className='grid grid-cols-2 max-w-screen-xl mx-auto'>
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
				<div className='h-full w-full bg-gray-200' />
			</article>
		</Layout>
	)
}
