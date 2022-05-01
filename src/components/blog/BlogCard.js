import React from 'react'
import Link from 'next/link'

const BlogCard = ({ slug }) => {
	return (
		<section className='blogCard'>
			<div className='blogCardImg' />
			<section className='blogCardBody'>
				<div>
					<h2 className='font-bold text-blue-400'>Marketing y Publicidad</h2>
					<p className='text-sm'>TÍTULO</p>
					<Link href={`/blog/${slug}`} className='text-gray-400 text-sm'>
						<a>FECHA</a>
					</Link>
				</div>
			</section>
		</section>
	)
}

export default BlogCard
