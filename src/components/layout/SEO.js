import React from 'react'
import Head from 'next/head'

const SEO = ({ title = 'Creatilat', content = 'Creatilat website' }) => (
	<Head>
		<title>{title}</title>
		<meta name='description' content={content} />
		<link rel='icon' href='/favicon.ico' />
	</Head>
)

export default SEO
