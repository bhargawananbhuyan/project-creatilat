import {
	faFacebookF,
	faInstagram,
	faLinkedinIn,
	faTwitter,
	faWhatsapp,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Drawer from './Drawer'

const Layout = ({ children }) => {
	return (
		<div className='w-screen'>
			<>
				<header className='hidden px-5 md:flex flex-col max-w-screen-xl mx-auto py-8'>
					<header className='flex justify-end gap-10'>
						<div className='flex items-center gap-2.5'>
							<FontAwesomeIcon icon={faPhone} className='text-sm' />
							<span>555 555 5555</span>
						</div>
						<div className='flex items-center gap-2.5'>
							<FontAwesomeIcon icon={faWhatsapp} className='text-xl' />
							<span>555 555 5555</span>
						</div>
					</header>

					<header className='flex items-center justify-between py-3.5'>
						<div className='flex items-center gap-20'>
							<Link href='/'>
								<a className='w-[150px] h-[60px] relative'>
									<Image
										src={'/assets/logo.png'}
										layout='fill'
										className='absolute object-contain'
										alt=''
									/>
								</a>
							</Link>
							{/* desktop navigation */}
							<nav className='flex gap-10 font-semibold'>
								<Link href='/productos'>
									<a>Productos</a>
								</Link>
								<Link href='/paquetes'>
									<a>Paquetes</a>
								</Link>
								<Link href='/premium'>
									<a>Premium</a>
								</Link>
								<Link href='/como-funciona'>
									<a>Como funciona</a>
								</Link>
								<Link href='/contacto'>
									<a>Contacto</a>
								</Link>
							</nav>
						</div>

						<div className='justify-self-end flex items-center gap-x-8'>
							<Link href={'/registro-de-pago/2'}>
								<a className='text-lg'>
									<FontAwesomeIcon icon={faCartShopping} />
								</a>
							</Link>

							<Link href='/login'>
								<a>Iniciar sesion</a>
							</Link>
						</div>
					</header>
				</header>

				<header className='w-full flex px-5 py-5 shadow items-center justify-between md:hidden bg-white z-[100]'>
					<div className='relative'>
						<Drawer />
					</div>

					<button className='px-2.5 py-1'>
						<FontAwesomeIcon icon={faCartShopping} />
					</button>
				</header>
			</>
			<main>{children}</main>
			<footer>
				<div className='bg-gray-100 py-14'>
					<section className='flex flex-wrap gap-x-16 px-5 md:gap-x-20 gap-10 max-w-screen-xl mx-auto'>
						<section className='grid gap-3.5'>
							<h1 className='font-bold'>MI CUENTA</h1>
							<div className='grid gap-2'>
								<Link href='/login'>
									<a>Iniciar Sesión</a>
								</Link>
								<Link href='/login'>
									<a>Registrarme</a>
								</Link>
							</div>
						</section>

						<section className='grid gap-3.5'>
							<h1 className='font-bold'>AYUDA</h1>
							<div className='grid gap-2'>
								<Link href='/preguntas-frecuentes'>
									<a>Preguntas frecuentes</a>
								</Link>
								<Link href='/preguntas-frecuentes'>
									<a>Guías y sugerencias</a>
								</Link>
							</div>
						</section>

						<section className='flex-shrink-0 grid gap-3.5'>
							<h1 className='font-bold'>LEGAL</h1>
							<div className='grid gap-2'>
								<Link href='/politicas-de-privacidad'>
									<a>Políticas de Privacidad</a>
								</Link>
								<Link href='/terminos-y-condiciones'>
									<a>Términos y Condiciones</a>
								</Link>
							</div>
						</section>

						<section className='flex-shrink-0 grid gap-3.5'>
							<h1 className='font-bold'>AFILIADOS</h1>
							<div className='grid gap-2'>
								<Link href='/como-funciona'>
									<a>Como funciona</a>
								</Link>
								<Link href='/subsidiary-login'>
									<a>Acceso a afiliados</a>
								</Link>
							</div>
						</section>

						<section className='flex-shrink-0 grid gap-3.5'>
							<h1 className='font-bold'>SÍGUENOS EN REDES SOCIALES</h1>
							<div className='text-xl flex flex-wrap gap-x-8 gap-y-5'>
								<FontAwesomeIcon icon={faFacebookF} />
								<FontAwesomeIcon icon={faInstagram} />
								<FontAwesomeIcon icon={faYoutube} />
								<FontAwesomeIcon icon={faTwitter} />
								<FontAwesomeIcon icon={faLinkedinIn} />
							</div>
						</section>

						<section className='flex-shrink-0'>
							<h1 className='font-bold mb-3.5'>CONTACTO</h1>

							<Link href='/contacto'>
								<a>Información de Contacto</a>
							</Link>
						</section>

						<section className='flex-shrink-0'>
							<h1 className='font-bold mb-3.5'>BLOG</h1>
							<Link href='/blog'>
								<a>Publicaciones</a>
							</Link>
						</section>
					</section>
				</div>
				<section className='bg-black text-xs md:text-sm p-5 flex items-center justify-center gap-2'>
					<em className='not-italic text-[#02AAAD]'>creatilat.com 2021 ©</em>
					<strong className='font-semibold text-white'>
						- Todos los derechos reservados.
					</strong>
				</section>
			</footer>
		</div>
	)
}

export default Layout
