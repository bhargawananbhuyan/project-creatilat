import Link from 'next/link'

export default function Productos({ productos }) {
	return (
		<div className='bg-[#F8F8F8]'>
			<div className='productos__grid max-w-screen-xl mx-auto'>
				{productos &&
					productos?.map((p, i) => (
						<Link
							key={i}
							href={{
								pathname: `/productos/${p.title
									?.toLowerCase()
									.split(' ')
									.join('-')}`,
							}}
						>
							<a className='block'>
								<div className='bg-gray-200 w-full h-full' />
								<p className='font-semibold text-sm py-2 text-gray-600'>
									{p.title}
								</p>
							</a>
						</Link>
					))}
			</div>
		</div>
	)
}
