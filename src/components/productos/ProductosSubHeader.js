import React from 'react'
import Link from 'next/link'
import makeLink from '../../utils/makeLink'

const subHeaderItems = [
	{
		route: 'logo-e-identidad',
		items: [
			{
				title: 'Logotipos',
			},
			{
				title: 'Logo para videojuegos',
			},
			{
				title: 'Correo electrónico',
			},
		],
	},
	{
		route: 'negocios-y-publicidad',
		items: [
			{
				title: 'Flyers',
			},
			{
				title: 'Cartel o póster',
			},
			{
				title: 'Infografía',
			},
			{
				title: 'Menú',
			},
			{
				title: 'Tarjeta de presentación',
			},
			{
				title: 'Catálogo',
			},
			{
				title: 'Desplegables',
			},
			{
				title: 'Portada de podcast o disco',
			},
		],
	},
	{
		route: 'emprendedor',
		items: [
			{
				title: 'Paquete Emprendedor',
			},
		],
	},
	{
		route: 'premium',
		items: [
			{
				title: 'Paquete Premium',
			},
		],
	},
	{
		route: 'arte-e-ilustración',
		items: [
			{
				title: 'Cartel o póster',
			},
			{
				title: 'Ilustraciones',
			},
			{
				title: 'Invitaciones',
			},
			{
				title: 'Portada de podcast o disco',
			},
			{
				title: 'Diseño de Tatuajes',
			},
		],
	},
	{
		route: 'editorial',
		items: [
			{
				title: 'Portada de libro',
			},
			{
				title: 'Interior libros',
			},
			{
				title: 'Catálogo',
			},
		],
	},
	{
		route: 'empresarial',
		items: [
			{
				title: 'Paquete Empresarial',
			},
		],
	},
	{
		route: 'desarrollo-de-productos',
		items: [
			{
				title: 'Paquete Desarrollo de Productos',
			},
		],
	},
]

export default function ProductosSubHeader({ route }) {
	return (
		<div
			className={`flex justify-center ${subHeaderItems
				.filter((item) => item.route === route)
				.map((_item) =>
					_item.items.length > 3 ? 'gap-5' : 'gap-10'
				)} py-14 gap-y-10 overflow-x-scroll hide-scrollbar flex-wrap`}
		>
			{subHeaderItems
				.filter((item) => item.route === route)
				.map((_item) =>
					_item.items.length === 1 && _item.route !== 'premium' ? (
						<Link href={`/productos/${makeLink(_item.items[0].title)}`}>
							<a className='w-[375px] h-[225px] flex-shrink-0 relative grid place-items-center'>
								<div className='bg-gray-200 w-[350px] h-full rounded-[50px]' />
								<div className='absolute bottom-0 left-0 w-[375px] bg-white shadow-xl rounded-xl px-5 py-3.5 text-xs text-center font-semibold opacity-75'>
									{_item.items[0].title}
								</div>
							</a>
						</Link>
					) : _item.items.length === 1 && _item.route === 'premium' ? (
						<Link href={`/productos/${makeLink(_item.items[0].title)}`}>
							<a className=' max-w-3xl w-full h-[225px] flex-shrink-0 relative grid place-items-center'>
								<div className='bg-gray-200 w-[95%] h-full rounded-[50px]' />
								<div className='absolute bottom-0 left-0 w-full bg-white shadow-xl rounded-xl px-5 py-3.5 text-xs text-center font-semibold opacity-75'>
									{_item.items[0].title}
								</div>
							</a>
						</Link>
					) : (
						_item.items.map((__item, i) => (
							<Link key={i} href={`/productos/${makeLink(__item.title)}`}>
								<a className='w-[200px] h-[225px] flex-shrink-0 relative grid place-items-center'>
									<div className='bg-gray-200 w-[160px] h-full rounded-[50px]' />
									<div className='absolute bottom-0 left-0 w-[200px] bg-white shadow-xl rounded-xl px-5 py-3.5 text-xs text-center font-semibold opacity-75'>
										{__item.title}
									</div>
								</a>
							</Link>
						))
					)
				)}
		</div>
	)
}
