import React from 'react'
import Layout from '../src/components/layout/Layout'
import SEO from '../src/components/layout/SEO'
import LoginForm from '../src/components/auth/LoginForm'
import RegisterForm from '../src/components/auth/RegisterForm'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Login() {
	const [active, setActive] = React.useState(1)
	const router = useRouter()

	React.useEffect(() => {
		if (window?.localStorage.getItem('user_data')) {
			router.replace('/')
		}
	}, [])

	return (
		<Layout>
			<SEO title='Iniciar Sesión' />
			<article className='mt-20 md:mt-32 grid justify-items-center md:justify-items-stretch md:grid-cols-2 gap-x-20'>
				<div className='md:hidden'>
					<Image
						src={`/assets/${active === 1 ? 'login' : 'register'}-1.jpg`}
						layout='fill'
						className='absolute object-cover z-[-1] top-0 left-0'
						alt=''
					/>
				</div>

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
				<div className='z-[50]'>
					{active === 1 ? (
						<LoginForm active={active} setActive={setActive} />
					) : (
						<RegisterForm active={active} setActive={setActive} />
					)}
				</div>
			</article>
		</Layout>
	)
}
