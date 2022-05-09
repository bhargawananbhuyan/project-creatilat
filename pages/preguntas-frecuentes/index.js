import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import Image from 'next/image'

export default function Index() {
	return (
		<Layout>
			<SEO title='Preguntas Frecuentes' />
			<div className='max-w-screen-lg mx-auto'>
				<div className='grid grid-cols-2 gap-10 pt-8 pb-20 items-center'>
					<div className='grid gap-10'>
						<section className='max-w-xl grid gap-5'>
							<h1 className='text-3xl font-bold'>¿Aún tienes dudas?</h1>
							<p>No te preocupes, nosotros te ayudamos.</p>
						</section>
						<div className='w-[400px] h-[400px] bg-gray-200 relative'>
							<Image
								src={'/assets/preguntas.jpg'}
								layout='fill'
								className='absolute'
								alt=''
							/>
						</div>
					</div>
					<div>
						{[
							{ title: '¿Qué es creatilat?' },
							{ title: '¿En qué formato se descargan los diseños?' },
							{ title: '¿Qué puedo ver en mi cuenta?' },
							{ title: '¿Cómo me pongo en contacto para más ayuda?' },
							{ title: '¿Cuándo debo realizar el pago?' },
							{ title: '¿Cuáles son los métodos de pago?' },
							{ title: '¿Cómo facturo mi compra?' },
							{ title: '¿Cómo se manejan los derechos de autor?' },
						].map(({ title }, i) => (
							<details key={i} className={`${i !== 7 && 'border-b'} px-8 py-3.5`}>
								<summary className='flex justify-between items-center cursor-pointer'>
									<strong className='text-[#8E8E8E] font-semibold'>
										{title}
									</strong>
									<FontAwesomeIcon icon={faCirclePlus} />
								</summary>
								<p className='pt-3.5'>Lorem ipsum dolor sit amet</p>
							</details>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}
