const InputField = ({ type = 'input', placeholder, additionalClasses = '', ...rest }) =>
	type === 'textarea' ? (
		<textarea
			placeholder={placeholder}
			className={`w-full bg-gray-100 border-2 border-transparent focus:border-2 focus:border-blue-300 
                px-5 py-3 rounded-md outline-none resize-none ${additionalClasses}`}
			rows={3}
			{...rest}
		></textarea>
	) : (
		<input
			placeholder={placeholder}
			className={`w-full border-2 border-transparent bg-gray-100 px-5 py-3 rounded-md outline-none 
                focus:border-2 focus:border-blue-300 ${additionalClasses}`}
			{...rest}
		/>
	)

export default InputField
