import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputField = ({ type = 'input', placeholder, additionalClasses = '', ...rest }) =>
	type === 'textarea' ? (
		<textarea
			placeholder={placeholder}
			className={`w-full bg-gray-100 border-2 border-transparent focus:border-2 focus:border-blue-300 focus:bg-gray-50
                px-5 py-3 rounded-md outline-none resize-none ${additionalClasses}`}
			rows={3}
			{...rest}
		></textarea>
	) : (
		<div className='relative'>
			<input
				placeholder={placeholder}
				className={`w-full border-2 border-transparent bg-gray-100 ${
					rest?.icon && 'pl-10'
				} px-5 py-3 rounded-md outline-none 
				focus:border-2 focus:border-blue-300 focus:bg-gray-50 transition-all ${additionalClasses}`}
				{...rest}
			/>
			{rest?.icon && (
				<FontAwesomeIcon
					icon={rest?.icon}
					className='absolute top-[1rem] left-3.5 text-gray-400'
				/>
			)}
		</div>
	)

export default InputField
