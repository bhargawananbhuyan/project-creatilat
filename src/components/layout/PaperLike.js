import React from 'react'

const PaperLike = ({ title, subtitle, text }) => (
	<div className='bg-[#f8f8f8] mt-16 md:mt-32'>
		<article className='max-w-screen-xl mx-auto grid place-items-center'>
			<h1 className='text-3xl font-bold text-gray-600 my-10'>{title}</h1>
			<section className='h-[600px] overflow-y-scroll bg-white max-w-screen-md mx-auto p-10 grid gap-5'>
				<h2 className='font-bold'>{subtitle}</h2>
				<div className='leading-relaxed text-justify'>{text}</div>
			</section>
		</article>
	</div>
)

export default PaperLike
