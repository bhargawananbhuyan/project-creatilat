import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductosHeader({ isRoute }) {
	return (
		<div className='grid grid-cols-4 gap-x-5 md:flex md:items-start md:justify-center md:gap-10'>
			{[
				{
					label: 'Logo e identidad',
					icon1: 'anchor_black_-1',
					icon2: 'anchor_black_-2',
				},
				{
					label: 'Negocios y publicidad',
					icon1: 'business_center_black_-1',
					icon2: 'business_center_black_-2',
				},
				{
					label: 'Arte e ilustración',
					icon1: 'drive_file_rename_outline_black_-1',
					icon2: 'drive_file_rename_outline_black_-2',
				},
				{ label: 'Editorial', icon1: 'menu_book_black_-1', icon2: 'menu_book_black_-2' },
				{ label: 'Emprendedor', icon1: 'lightbulb_black_-1', icon2: 'lightbulb_black_-2' },
				{
					label: 'Empresarial',
					icon1: 'meeting_room_black_-1',
					icon2: 'meeting_room_black_-2',
				},
				{
					label: 'Desarrollo de productos',
					icon1: 'category_black_-1',
					icon2: 'category_black_-2',
				},
				{ label: 'Premium', icon1: 'stars_black_-1', icon2: 'stars_black_-2' },
			].map((item, i) => (
				<Link key={i} href={`/productos/${item.label.toLowerCase().split(' ').join('-')}`}>
					<a>
						<div className='relative h-[120px]'>
							<section
								key={i}
								className='grid place-items-center max-w-[125px] text-center gap-3.5'
							>
								<div
									className={`h-[32px] w-[32px] md:h-[60px] md:w-[60px] ${
										isRoute(item.label)
											? 'bg-white bg-opacity-75'
											: 'bg-blue-800 bg-opacity-25'
									} rounded-full grid place-items-center`}
								>
									<div className='w-[18px] h-[18px] md:w-[24px] md:h-[24px] relative'>
										<Image
											src={`/assets/${
												isRoute(item.label) ? item.icon2 : item.icon1
											}.png`}
											layout='fill'
											className='absolute object-contain'
											alt=''
										/>
									</div>
								</div>
								<p className='text-xs md:text-sm font-semibold text-white'>
									{item.label}
								</p>
							</section>

							{isRoute(item.label) && (
								<div className='hidden absolute bottom-[-3rem] w-full md:grid place-items-center'>
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
