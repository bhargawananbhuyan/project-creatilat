import {
	faFacebookF,
	faInstagram,
	faPinterestP,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import InputField from '../../src/components/layout/InputField'
import BlogCard from '../../src/components/blog/BlogCard'

const Index = () => {
	return (
		<Layout>
			<SEO title='Blog' />

			<article className='py-16'>
				<section className='max-w-md mx-auto text-center grid gap-8'>
					<div>
						<h1 className='text-4xl font-bold'>Noticias y artículos</h1>
						<p className='text-gray-400 mt-2.5'>
							El mejor blog de tendencias en diseño
						</p>
					</div>
					<InputField
						placeholder={'¿Buscas un tema en especial?'}
						additionalClasses='text-center text-sm'
					/>
					<button className='bg-black text-white py-2.5 px-16 rounded-full justify-self-center'>
						Buscar
					</button>
				</section>

				<div className='relative'>
					<section className='text-2xl grid absolute top-10 left-20 gap-8 p-8'>
						<FontAwesomeIcon icon={faFacebookF} />
						<FontAwesomeIcon icon={faInstagram} />
						<FontAwesomeIcon icon={faTwitter} />
						<FontAwesomeIcon icon={faPinterestP} />
						<FontAwesomeIcon icon={faEnvelope} />
					</section>
					<div className='blogGridOne mt-20'>
						{Array.from(Array(3).keys()).map((i) => (
							<BlogCard key={i} slug={i} />
						))}
					</div>
					<div className='blogGridTwo mt-8'>
						{Array.from(Array(2).keys()).map((i) => (
							<BlogCard key={i} slug={i} />
						))}
					</div>
					<div className='bg-gray-100 py-16 my-20'>
						<div className='blogGridOne'>
							{Array.from(Array(3).keys()).map((i) => (
								<BlogCard key={i} slug={i} />
							))}
						</div>
					</div>
					<div className='blogGridTwo'>
						{Array.from(Array(2).keys()).map((i) => (
							<BlogCard key={i} slug={i} />
						))}
					</div>
				</div>

				<div className='pagination'>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>4</button>
					<button>5</button>
				</div>

				<div className='bg-blue-500 py-14 max-w-screen-xl mx-auto rounded'>
					<section className='grid place-items-center gap-7 text-center max-w-md mx-auto'>
						<h1 className='text-3xl font-bold'>¡No te pierdas todo lo nuevo!</h1>
						<p className='text-white'>
							Suscríbete y recibe noticias sobre nuevos artículos y temas de tu
							interés en diseño.
						</p>
						<input
							placeholder='Correo electrónico'
							className='py-3.5 w-full outline-none px-5 rounded text-sm'
						/>
						<button className='bg-black text-white py-2.5 px-10 rounded-full'>
							Susribirme
						</button>
					</section>
				</div>
			</article>
		</Layout>
	)
}

export default Index
