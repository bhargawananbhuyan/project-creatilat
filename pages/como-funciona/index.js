import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'

const content = [
	{
		title: 'Elige',
		subtitle: 'un producto o paquete',
	},
	{
		title: 'Paga',
		subtitle: 'tu producto(s)',
		extra1: 'Oxxo, Visa o MasterCard',
		extra2: '*Ofrecemos meses sin intereses',
	},
	{
		title: 'Completa el formulario',
		subtitle: 'con la descripción de tu proyecto',
	},
	{
		title: 'Recibe',
		subtitle: 'tu diseño',
		extra1: 'Estaremos en contacto vía chat para las revisiones y entregas de tu proyecto.',
	},
	{
		title: 'Recibe',
		subtitle: 'tu diseño',
		extra1: 'Recibe atención personalizada a través de nuestro chat para las revisiones y entregas de tu proyecto.',
	},
]

const Index = () => {
	const [active, setActive] = React.useState(0)

	return (
		<Layout>
			<SEO title='Como funciona' />

			<div className='max-w-screen-xl mx-auto relative'>
				<h1 className='text-4xl text-center font-bold mt-5 mb-10'>Como funciona</h1>
				<div className='max-w-sm mx-auto grid grid-cols-2'>
					<button
						className={`py-2.5 border border-black ${
							active === 0 ? 'bg-black text-white' : ''
						}`}
						onClick={() => setActive(0)}
					>
						Productos y paquetes
					</button>
					<button
						className={`py-2.5 border border-black ${
							active === 1 ? 'bg-black text-white' : ''
						}`}
						onClick={() => setActive(1)}
					>
						Proyecto Premium
					</button>
				</div>
				{active === 0 ? (
					<>
						<div className='grid grid-cols-4 my-16'>
							{content.slice(0, 4).map((item, i) => (
								<div key={i}>
									<section className='grid place-items-center text-center gap-y-10'>
										<div className='h-[100px] w-[100px] bg-gray-300' />
										<h1 className='h-[60px] w-[60px] grid place-items-center border-[5px] border-yellow-400 rounded-full text-2xl font-bold bg-white'>
											0{i + 1}
										</h1>
										<section>
											<h2 className='font-bold'>{item.title}</h2>
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
						<div className='h-[5px] w-full bg-gray-300 absolute bottom-[10rem] z-[-1]'>
							<div className='w-full relative'>
								<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute top-[-.37rem] left-[-5px]' />
								<div className='h-[1rem] w-[1rem] bg-gray-300 rounded-full absolute top-[-.37rem] right-[-5px]' />
							</div>
						</div>
					</>
				) : (
					<>
						<div className='grid grid-cols-5 my-16'>
							{content.map((item, i) => (
								<div key={i}>
									<section className='grid place-items-center text-center gap-y-10'>
										<div className='h-[100px] w-[100px] bg-gray-300' />
										<h1 className='h-[60px] w-[60px] grid place-items-center border-[5px] border-yellow-400 rounded-full text-2xl font-bold bg-white'>
											0{i + 1}
										</h1>
										<section>
											<h2 className='font-bold'>{item.title}</h2>
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
						<div className='h-[5px] w-full bg-gray-300 absolute bottom-[11.2rem] z-[-1]'>
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
						<button className='bg-black text-white w-full py-2.5 font-semibold rounded-full'>
							Productos
						</button>
					) : (
						<div className='grid gap-2.5'>
							<button className='bg-black border-2 border-black text-white w-full py-2.5 font-semibold rounded-full'>
								Comienza tu proyecto
							</button>
							<button className='border-2 border-black w-full py-2.5 font-semibold rounded-full'>
								Productos
							</button>
						</div>
					)}
				</div>

				<div className='text-blue-500 font-bold underline'>¿Tienes alguna pregunta? </div>
			</div>
		</Layout>
	)
}

export default Index
