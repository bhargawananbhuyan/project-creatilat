import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const subHeaderItems = [
	{
		route: 'logo-e-identidad',
		items: [
			{
				title: 'Logotipo',
				img: 'logo-1.jpg',
				link: 'logotipos',
			},
			{
				title: 'Logo para videojuegos',
				img: 'logo-2.jpg',
				link: 'diseño-de-videojuegos',
			},
			{
				title: 'Correo electrónico',
				img: 'logo-3.png',
				link: 'correo-electrónico',
			},
		],
	},
	{
		route: 'negocios-y-publicidad',
		items: [
			{
				title: 'Flyers',
				img: 'nego-1.jpg',
				link: 'flyers',
			},
			{
				title: 'Cartel o póster',
				img: 'nego-2.jpg',
				link: 'cartel-o-póster',
			},
			{
				title: 'Infografía',
				img: 'nego-3.jpg',
				link: 'infografía',
			},
			{
				title: 'Menú',
				img: 'nego-4.jpg',
				link: 'menú',
			},
			{
				title: 'Tarjeta de presentación',
				img: 'nego-5.jpg',
				link: 'tarjetas-de-presentación',
			},
			{
				title: 'Catálogo',
				img: 'nego-6.jpg',
				link: 'catálogo',
			},
			{
				title: 'Desplegables',
				img: 'nego-7.jpg',
				link: 'desplegables',
			},
			{
				title: 'Portada de podcast o disco',
				img: 'nego-8.jpg',
				link: 'portada-de-podcast-o-disco',
			},
		],
	},
	{
		route: 'emprendedor',
		items: [
			{
				title: 'Paquete Emprendedor',
				img: 'emprendedor.jpg',
				link: 'paquetes',
			},
		],
	},
	{
		route: 'premium',
		items: [
			{
				title: 'Paquete Premium',
				img: 'premium.jpg',
			},
		],
	},
	{
		route: 'arte-e-ilustración',
		items: [
			{
				title: 'Cartel o póster',
				img: 'arte-1.jpg',
				link: 'cartel-o-póster',
			},
			{
				title: 'Ilustraciones',
				img: 'arte-2.jpg',
				link: 'ilustraciones',
			},
			{
				title: 'Invitaciones',
				img: 'arte-3.jpg',
				link: 'invitaciones',
			},
			{
				title: 'Portada de podcast o disco',
				img: 'arte-4.jpg',
				link: 'portada-de-podcast-o-disco',
			},
			{
				title: 'Diseño de Tatuajes',
				img: 'arte-5.jpg',
				link: 'diseño-de-tatuajes',
			},
		],
	},
	{
		route: 'editorial',
		items: [
			{
				title: 'Portada de libro',
				img: 'edit-1.png',
				link: 'portada-de-libro',
			},
			{
				title: 'Interior libros',
				img: 'edit-2.jpg',
				link: 'interior-libros',
			},
			{
				title: 'Catálogo',
				img: 'edit-3.jpg',
				link: 'catálogo',
			},
		],
	},
	{
		route: 'empresarial',
		items: [
			{
				title: 'Paquete Empresarial',
				img: 'empresarial.jpg',
				link: 'paquetes',
			},
		],
	},
	{
		route: 'desarrollo-de-productos',
		items: [
			{
				title: 'Paquete Desarrollo de Productos',
				img: 'paquete.jpg',
				link: 'paquetes',
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
						<Link href={`/${_item.items[0].link}`}>
							<a className='w-[375px] h-[225px] flex-shrink-0 relative grid place-items-center'>
								<div className='bg-gray-200 w-[350px] h-full rounded-[50px] relative'>
									<Image
										src={`/assets/products/${_item.items[0].img}`}
										layout='fill'
										className='absolute'
										alt=''
									/>
								</div>
								<div className='absolute bottom-0 left-0 w-[375px] bg-white shadow-xl rounded-xl px-5 py-3.5 text-xs text-center font-semibold bg-opacity-95'>
									{_item.items[0].title}
								</div>
							</a>
						</Link>
					) : _item.items.length === 1 && _item.route === 'premium' ? (
						<Link href={`/premium`}>
							<a className=' max-w-3xl w-full h-[225px] flex-shrink-0 relative grid place-items-center'>
								<div className='bg-gray-200 w-[95%] h-full rounded-[50px] relative'>
									<Image
										src={`/assets/products/${_item.items[0].img}`}
										layout='fill'
										className='absolute'
										alt=''
									/>
								</div>
								<div className='absolute bottom-0 left-0 w-full bg-white shadow-xl rounded-xl px-5 py-3.5 text-xs text-center font-semibold bg-opacity-95'>
									{_item.items[0].title}
								</div>
							</a>
						</Link>
					) : (
						_item.items.map((__item, i) => (
							<Link key={i} href={`/productos/${__item.link}`}>
								<a className='w-[200px] h-[225px] flex-shrink-0 relative grid place-items-center'>
									<div className='bg-gray-200 w-[160px] h-full rounded-[50px] relative'>
										<Image
											src={`/assets/products/${__item.img}`}
											layout='fill'
											className='absolute'
											alt=''
										/>
									</div>
									<div className='absolute bottom-0 left-0 w-[200px] bg-white shadow-xl rounded-xl px-5 py-3.5 text-xs text-center font-semibold bg-opacity-95'>
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
