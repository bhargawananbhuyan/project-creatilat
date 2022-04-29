import React from 'react'
import Link from 'next/link'

export default function ProductosHeader({ isRoute }) {
	return (
		<div className='flex items-start justify-center gap-10'>
			{[
				'Logo e identidad',
				'Negocios y publicidad',
				'Arte e ilustración',
				'Editorial',
				'Emprendedor',
				'Empresarial',
				'Desarrollo de productos',
				'Premium',
			].map((item, i) => (
				<Link key={i} href={`/productos/${item.toLowerCase().split(' ').join('-')}`}>
					<a>
						<div className='relative h-[120px]'>
							<section
								key={i}
								className='grid place-items-center max-w-[125px] text-center gap-3.5'
							>
								<div className='h-[60px] w-[60px] bg-gray-200 rounded-full' />
								<p className='text-sm font-semibold text-white'>{item}</p>
							</section>

							{isRoute(item) && (
								<div className='absolute bottom-[-3rem] w-full grid place-items-center'>
									<div className='h-[15px] w-[15px] bg-white rotate-45' />
								</div>
							)}
						</div>
					</a>
				</Link>
			))}
		</div>
	)
}
