import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookF,
	faInstagram,
	faYoutube,
	faTwitter,
	faLinkedin,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children }) => {
	return (
		<div>
			<header className='flex flex-col max-w-screen-xl mx-auto py-8'>
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
					<div className='flex items-center gap-14'>
						<Link href='/'>
							<a className='text-3xl font-bold'>CREATILAT</a>
						</Link>
						{/* desktop navigation */}
						<nav className='flex gap-10 font-semibold'>
							<Link href='/'>
								<a>Productos</a>
							</Link>
							<Link href='/'>
								<a>Paquetes</a>
							</Link>
							<Link href='/'>
								<a>Premium</a>
							</Link>
							<Link href='/'>
								<a>Como funciona</a>
							</Link>
							<Link href='/'>
								<a>Contacto</a>
							</Link>
						</nav>
					</div>

					<Link href='/login'>
						<a className=' justify-self-end'>Iniciar sesion</a>
					</Link>
				</header>
			</header>
			<main>{children}</main>
			<footer>
				<div className='bg-gray-100 py-14'>
					<section className='grid grid-cols-5 gap-x-[100px] gap-10 max-w-screen-xl mx-auto'>
						<section className='grid gap-3.5'>
							<h1 className='font-bold'>MI CUENTA</h1>
							<div className='grid gap-2'>
								<div>Iniciar Sesión</div>
								<div>Registrarme</div>
							</div>
						</section>

						<section className='grid gap-3.5'>
							<h1 className='font-bold'>AYUDA</h1>
							<div className='grid gap-2'>
								<div>Preguntas frecuentes</div>
								<div>Guías y sugerencias</div>
							</div>
						</section>

						<section className='flex-shrink-0 grid gap-3.5'>
							<h1 className='font-bold'>LEGAL</h1>
							<div className='grid gap-2'>
								<div>Políticas de Privacidad</div>
								<div>Términos y Condiciones</div>
							</div>
						</section>

						<section className='flex-shrink-0 grid gap-3.5'>
							<h1 className='font-bold'>AFILIADOS</h1>
							<div className='grid gap-2'>
								<div>Como funciona</div>
								<div>Acceso a afiliados</div>
							</div>
						</section>

						<section className='flex-shrink-0 grid gap-3.5 w-[400px]'>
							<h1 className='font-bold'>SÍGUENOS EN REDES SOCIALES</h1>
							<div className='text-2xl flex flex-wrap gap-5'>
								<FontAwesomeIcon icon={faFacebookF} />
								<FontAwesomeIcon icon={faInstagram} />
								<FontAwesomeIcon icon={faYoutube} />
								<FontAwesomeIcon icon={faTwitter} />
								<FontAwesomeIcon icon={faLinkedin} />
							</div>
						</section>

						<section className='flex-shrink-0'>
							<h1 className='font-bold mb-3.5'>CONTACTO</h1>
							<p>Iniciar Sesión</p>
						</section>

						<section className='flex-shrink-0'>
							<h1 className='font-bold mb-3.5'>BLOG</h1>
							<p>Publicaciones</p>
						</section>
					</section>
				</div>
				<section className='bg-black text-sm p-5 flex items-center justify-center gap-2'>
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
