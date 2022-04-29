import { useRouter } from 'next/router'
import React from 'react'
import InputField from '../../src/components/layout/InputField'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import Productos from '../../src/components/productos/Productos'
import ProductosHeader from '../../src/components/productos/ProductosHeader'
import { productos } from '../../src/utils/data'

export default function Index() {
	const router = useRouter()
	const { slug } = router.query
	const isRoute = (title) => title?.toLowerCase().split(' ').join('-') === slug

	return (
		<Layout>
			<SEO title='Productos' />

			<section className='bg-[#4384F5] grid place-items-center gap-10 py-10'>
				<h1 className='text-3xl font-bold text-white'>¿Qué necesitas diseñar?</h1>
				<div className='max-w-lg w-full'>
					<InputField
						placeholder='Logotipo, empaque, ilustraciones…'
						additionalClasses='text-sm'
					/>
				</div>
				<ProductosHeader isRoute={isRoute} />
			</section>

			<Productos productos={productos} />
		</Layout>
	)
}
