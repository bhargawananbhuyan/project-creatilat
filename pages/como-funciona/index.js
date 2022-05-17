import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import Image from 'next/image'
import Link from 'next/link'

const content1 = [
	{
		title: 'Elige',
		subtitle: 'un producto o paquete',
		img: 6,
	},
	{
		title: 'Paga',
		subtitle: 'tu producto(s)',
		extra1: 'Oxxo, Visa o MasterCard',
		extra2: '*Ofrecemos meses sin intereses',
		img: 5,
	},
	{
		title: 'Completa el formulario',
		subtitle: 'con la descripción de tu proyecto',
		img: 4,
	},
	{
		title: 'Recibe',
		subtitle: 'tu diseño',
		extra1: 'Estaremos en contacto vía chat para las revisiones y entregas de tu proyecto.',
		img: 3,
	},
]

const content2 = [
	{
		title: 'Contáctanos',
		subtitle: 'si no hay algún producto o paquete que se alinee a tus necesidades.',
		img: 2,
	},
	{
		title: 'Completa el formulario',
		subtitle: 'con la descripción de tu proyecto',
		img: 4,
	},
	{
		title: 'Obtén',
		subtitle: 'una propuesta personalizada',
		img: 1,
	},
	{
		title: 'Paga',
		subtitle: 'tu producto(s)',
		extra1: 'Oxxo, Visa o MasterCard',
		extra2: '*Ofrecemos meses sin intereses',
		img: 5,
	},
	{
		title: 'Recibe',
		subtitle: 'tu diseño',
		extra1: 'Estaremos en contacto vía chat para las revisiones y entregas de tu proyecto.',
		img: 3,
	},
]

const Index = () => {
	const [active, setActive] = React.useState(0)

	return (
		<Layout>
			<SEO title='Como funciona' />

			<div className='mt-32 md:mt-44 max-w-screen-xl mx-auto relative px-5 md:px-0'>
				<h1 className='text-2xl md:text-5xl text-center font-extrabold mt-12 md:mt-5 mb-10 text-gray-600'>
					Como funciona
				</h1>
				<div className='max-w-md mx-auto grid grid-cols-2'>
					<button
						className={`text-sm md:text-base font-semibold py-2.5 border border-black ${
							active === 0 ? 'bg-black text-white' : ''
						}`}
						onClick={() => setActive(0)}
					>
						Productos y paquetes
					</button>
					<button
						className={`text-sm md:text-base font-semibold py-2.5 border border-black ${
							active === 1 ? 'bg-black text-white' : ''
						}`}
						onClick={() => setActive(1)}
					>
						Proyecto Premium
					</button>
				</div>
				{active === 0 ? (
					<>
						<div className='relative'>
							<div className='grid md:grid-cols-4 my-16 gap-y-10 md:gap-0'>
								{content1.map((item, i) => (
									<div key={i}>
										<section className='grid grid-cols-[60px_60px_auto] md:grid-cols-1 gap-x-3.5 md:place-items-center text-left md:text-center gap-y-10'>
											<div className='h-[60px] md:h-[100px] w-[60px] md:w-[100px] relative'>
												<Image
													src={`/assets/como-functiona/${item.img}.png`}
													layout='fill'
													className='absolute'
													alt=''
												/>
											</div>
											<h1 className='h-[60px] w-[60px] grid place-items-center border-[5px] border-yellow-400 rounded-full text-2xl font-extrabold bg-white'>
												0{i + 1}
											</h1>
											<section className='ml-3.5 md:m-0'>
												<h2 className='text-sm font-extrabold'>
													{item.title}
												</h2>
												<p className='grid text-sm'>
													<span>{item.subtitle}</span>
													<span className='mt-2.5'>{item.extra1}</span>
													<em>{item.extra2}</em>
												</p>
											</section>
										</section>
									</div>
								))}
							</div>
							<div className='md:hidden block h-full w-[5px] bg-gray-300 absolute top-[-1.5rem] left-[6.35rem] z-[-1]'>
								<div className='relative h-full'>
									<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute top-[-.42rem] left-[-6px]' />
									<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute bottom-[-.42rem] left-[-6px]' />
								</div>
							</div>
						</div>
						<div className='hidden xl:block h-[5px] w-full bg-gray-300 absolute bottom-[10rem] z-[-1]'>
							<div className='w-full relative'>
								<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute top-[-.37rem] left-[-5px]' />
								<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute top-[-.37rem] right-[-5px]' />
							</div>
						</div>
					</>
				) : (
					<>
						<div className='relative'>
							<div className='grid md:grid-cols-5 my-16 gap-y-10 md:gap-0'>
								{content2.map((item, i) => (
									<div key={i}>
										<section className='grid grid-cols-[60px_60px_auto] md:grid-cols-1 gap-x-3.5 md:place-items-center text-left md:text-center gap-y-10'>
											<div className='h-[60px] md:h-[100px] w-[60px] md:w-[100px] relative'>
												<Image
													src={`/assets/como-functiona/${item.img}.png`}
													layout='fill'
													className='absolute'
													alt=''
												/>
											</div>
											<h1 className='h-[60px] w-[60px] grid place-items-center border-[5px] border-yellow-400 rounded-full text-2xl font-extrabold bg-white'>
												0{i + 1}
											</h1>
											<section className='ml-3.5 md:m-0'>
												<h2 className='text-sm font-extrabold'>
													{item.title}
												</h2>
												<p className='grid text-sm'>
													<span>{item.subtitle}</span>
													<span className='mt-2.5'>{item.extra1}</span>
													<em>{item.extra2}</em>
												</p>
											</section>
										</section>
									</div>
								))}
							</div>

							<div className='md:hidden block h-full w-[5px] bg-gray-300 absolute top-[-1.5rem] left-[6.35rem] z-[-1]'>
								<div className='relative h-full'>
									<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute top-[-.42rem] left-[-6px]' />
									<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute bottom-[-.42rem] left-[-6px]' />
								</div>
							</div>
						</div>
						<div className='hidden xl:block h-[5px] w-full bg-gray-300 absolute bottom-[9.8rem] z-[-1]'>
							<div className='w-full relative'>
								<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute top-[-.37rem] left-[-5px]' />
								<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute top-[-.37rem] right-[-5px]' />
							</div>
						</div>
					</>
				)}
			</div>

			<div className='max-w-screen-xl mx-auto grid place-items-center gap-y-5 pb-14'>
				<div className='max-w-sm w-full'>
					{active === 0 ? (
						<Link href='/productos'>
							<a className='bg-black grid place-items-center border-2 border-white shadow-xl hover:shadow-none text-white w-full py-2.5 font-semibold rounded-full'>
								Productos
							</a>
						</Link>
					) : (
						<div className='grid gap-2.5'>
							<button className='bg-black border-2 border-black text-white w-full py-2.5 font-semibold rounded-full'>
								Comienza tu proyecto
							</button>
							<Link href='/productos'>
								<a className='border-2 grid place-items-center border-black w-full py-2.5 font-semibold rounded-full'>
									Productos
								</a>
							</Link>
						</div>
					)}
				</div>

				<div className='text-blue-500 font-bold underline'>¿Tienes alguna pregunta? </div>
			</div>
		</Layout>
	)
}

export default Index
