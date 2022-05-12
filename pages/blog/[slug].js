import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHeart,
	faPaperPlane,
	faQuoteLeft,
	faQuoteRight,
	faReply,
	faThumbsDown,
	faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Blog = () => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<Layout>
			<SEO title={`Blogs | ${slug}`} />

			<article className='grid gap-y-10 md:gap-y-14 text-[#77838F]'>
				<div className='h-[200px] md:h-[350px] w-full bg-gray-200 relative'>
					<Image
						src={'/assets/blog/banner-1.png'}
						layout='fill'
						className='absolute object-cover'
						alt=''
					/>
				</div>
				<div className='max-w-screen-md mx-auto grid gap-y-14 px-5 md:px-0'>
					<section className='grid place-items-center text-center gap-y-3.5'>
						<h1 className='text-3xl font-semibold text-black'>Título del Blog</h1>
						<h2 className='text-lg text-black'>Subtítulo del Blog</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy text
							ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type.
						</p>
					</section>

					<section className='border-t border-b flex flex-col md:flex-row gap-y-5 items-center justify-between py-5'>
						<div className='flex items-center gap-x-3.5'>
							<div className='w-[60px] h-[60px] bg-gray-300 rounded-full relative'>
								<Image
									src={'/assets/blog/avatar.png'}
									layout='fill'
									className='absolute object-contain'
									alt=''
								/>
							</div>
							<section className='grid gap-1'>
								<h3 className='font-semibold text-black'>
									Autor de la publicación
								</h3>
								<p className='text-gray-400 text-sm'>
									Publicado el 8 de febrero 2022
								</p>
							</section>
						</div>

						<section className='flex items-center gap-x-10'>
							<span className='text-sm text-gray-400'>Califica el artículo</span>
							<div className='flex gap-x-3.5 text-xl'>
								<FontAwesomeIcon icon={faHeart} className='text-blue-500' />
								<FontAwesomeIcon icon={faThumbsUp} className='text-[#aaa]' />
								<FontAwesomeIcon icon={faThumbsDown} className='text-[#aaa]' />
							</div>
						</section>
					</section>
				</div>

				<p className='max-w-screen-md mx-auto leading-relaxed px-5'>
					It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more
					recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
				</p>

				<div className='h-[200px] md:h-[300px] bg-gray-200 max-w-screen-lg w-full mx-auto relative'>
					<Image
						src={'/assets/blog/banner-2.png'}
						layout='fill'
						className='absolute object-cover'
						alt=''
					/>
				</div>

				<p className='max-w-screen-md mx-auto leading-relaxed px-5'>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
					in a piece of classical Latin literature from 45 BC, making it over 2000 years
					old. Richard McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words, consectetur, from a
					Lorem Ipsum passage, and going through the cites of the word in classical
					literature, discovered the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes
					of Good and Evil) by Cicero, written in 45 BC.)
				</p>

				<div className='relative max-w-screen-md mx-auto h-[250px] md:h-[200px] w-full bg-[#F4F8FF] text-black rounded text-lg md:text-2xl grid place-items-center text-center leading-normal font-bold'>
					<div className='grid gap-y-2.5 md:gap-y-5'>
						<div>
							El diseño no es solo cómo se ve y se siente.
							<br />
							El diseño es cómo funciona.
						</div>
						<div className='text-base font-normal text-[#77838F]'>STEVE JOBS</div>

						<FontAwesomeIcon
							icon={faQuoteLeft}
							className='text-[#DDE7FD] text-4xl absolute top-5 left-5'
						/>
						<FontAwesomeIcon
							icon={faQuoteRight}
							className='text-[#DDE7FD] text-4xl absolute bottom-5 right-5'
						/>
					</div>
				</div>

				<section className='max-w-screen-md mx-auto leading-relaxed px-5 md:px-0'>
					<h2 className='text-2xl text-black font-semibold mb-3.5'>
						Subtítulo del artículo
					</h2>
					<p>
						There are many variations of passages of Lorem Ipsum available, but the
						majority have suffered alteration in some form, by injected humour, or
						randomised words which don&apos;t look even slightly believable.
					</p>
					<ul className='list-disc px-5 py-2.5 grid gap-y-2.5'>
						<li>
							There are many variations of passages of Lorem Ipsum available, but the
							majority have suffered alteration in some form, by injected humour, or
							randomised words which don&apos;t look even slightly believable.
						</li>
						<li>
							There are many variations of passages of Lorem Ipsum available, but the
							majority have suffered alteration in some form, by injected humour, or
							randomised words which don&apos;t look even slightly believable.
						</li>
					</ul>
				</section>

				<div className='h-[300px] bg-gray-200 max-w-screen-lg w-full mx-auto relative'>
					<Image
						src={'/assets/blog/banner-3.png'}
						layout='fill'
						className='absolute object-cover'
						alt=''
					/>
				</div>

				<p className='max-w-screen-md mx-auto px-5 md:px-0'>
					There are many variations of passages of Lorem Ipsum available, but the majority
					have suffered alteration in some form, by injected humour, or randomised words
					which don&apos;t look even slightly believable.
				</p>

				<div className='max-w-screen-md mx-auto grid place-items-center border-t px-5 md:px-0'>
					<section className='max-w-lg grid gap-y-5 text-center leading-relaxed py-10'>
						<h2 className='text-[#FF2E00] font-bold'>Comentarios</h2>
						<h3 className='text-xl text-black'>
							Hay 3 comentarios respecto al artículo
						</h3>
						<p>
							There are many variations of passages of Lorem Ipsum available, but the
							majority have suffered alteration in.
						</p>
					</section>

					<div className='w-full'>
						{Array.from(Array(3).keys()).map((i) => (
							<>
								<section className='w-full px-5 py-8'>
									<div className='flex justify-between items-start w-full'>
										<div className='flex items-center gap-x-3.5'>
											<div className='w-[45px] h-[45px] bg-gray-300 rounded-full relative'>
												<Image
													src={'/assets/blog/avatar.png'}
													layout='fill'
													className='absolute object-cover'
													alt=''
												/>
											</div>
											<section className='grid gap-1'>
												<h3 className='font-semibold text-black text-sm'>
													Nombre A.
												</h3>
												<p className='text-gray-400 text-sm'>
													8 de feb 2022
												</p>
											</section>
										</div>
										<button className='flex items-center gap-x-2.5 bg-gray-100 px-5 py-2 text-xs rounded-lg'>
											<FontAwesomeIcon icon={faReply} />
											<span>Reply</span>
										</button>
									</div>
									<p className='px-10 indent-5 leading-relaxed mt-2.5'>
										It is a long established fact that a reader will be
										distracted by the readable content of a page when looking at
										its layout.
									</p>

									{i === 1 && (
										<section className='pl-10 mt-8'>
											<div className='flex justify-between items-start w-full'>
												<div className='flex items-center gap-x-3.5'>
													<div className='w-[45px] h-[45px] bg-gray-300 rounded-full relative'>
														<Image
															src={'/assets/blog/avatar.png'}
															layout='fill'
															className='absolute object-cover'
															alt=''
														/>
													</div>
													<section className='grid gap-1'>
														<h3 className='font-semibold text-black text-sm'>
															Nombre A.
														</h3>
														<p className='text-gray-400 text-sm'>
															8 de feb 2022
														</p>
													</section>
												</div>
												<button className='flex items-center gap-x-2.5 bg-gray-100 px-5 py-2 text-xs rounded-lg'>
													<FontAwesomeIcon icon={faReply} />
													<span>Reply</span>
												</button>
											</div>
											<p className='px-10 indent-5 leading-relaxed mt-2.5'>
												It is a long established fact that a reader will be
												distracted by the readable content of a page when
												looking at its layout.
											</p>
										</section>
									)}
								</section>
								<hr className='border-t border-gray-200' />
							</>
						))}
					</div>
				</div>

				<form className='text-black max-w-screen-md mx-auto w-full grid gap-y-8 px-5 md:px-0'>
					<h2 className='text-3xl font-semibold'>Comparte tu comentario</h2>

					<div className='grid gap-y-2'>
						<label className='text-sm font-semibold'>NOMBRE</label>
						<input
							placeholder='Nombre o pseudónimo'
							className='border px-5 py-3.5 rounded'
						/>
					</div>
					<div className='grid gap-y-2'>
						<label className='text-sm font-semibold'>EMAIL</label>
						<input placeholder='Email' className='border px-5 py-3.5 rounded' />
					</div>
					<div className='grid gap-y-2'>
						<label className='text-sm font-semibold'>COMENTARIO</label>
						<input
							placeholder='Comparte tu comentario'
							className='border px-5 py-3.5 rounded'
						/>
					</div>

					<button className='bg-[#0047FF] text-white px-14 py-3.5 rounded justify-self-center mt-10 shadow-xl hover:shadow-none transition-all'>
						ENVIAR
					</button>
				</form>

				<div className='bg-[#F7FAFD] pt-20 pb-24 px-5 md:px-0'>
					<section className='max-w-lg mx-auto text-center grid gap-y-2.5'>
						<h2 className='text-black text-2xl'>Recibe las noticias en tu correo</h2>
						<p className='leading-relaxed'>
							Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
							Quisque sit amet nisi erat.
						</p>
						<form className='mt-8 relative'>
							<input
								className='bg-white w-full px-5 py-3.5 rounded'
								placeholder='Email'
							/>
							<button className='absolute top-[8.5px] right-[8.5px] h-[35px] w-[35px] bg-[#0047FF] text-white rounded grid place-items-center'>
								<FontAwesomeIcon icon={faPaperPlane} />
							</button>
						</form>
					</section>
				</div>
			</article>
		</Layout>
	)
}

export default Blog
