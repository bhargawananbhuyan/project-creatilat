import Image from 'next/image'

const Title = ({ text, img }) => {
	return (
		<div className='flex items-center gap-x-2.5'>
			<div className='w-[18px] h-[18px] relative'>
				<Image
					src={`/assets/premium-${img}.png`}
					layout='fill'
					className='absolute object-contain'
					alt=''
				/>
			</div>
			<span>{text}</span>
		</div>
	)
}

export default Title
