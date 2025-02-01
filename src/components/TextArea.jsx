import React from 'react';

const TextArea = ({ value, placeholder, name, handleChange }) => {
	return (
		<textarea
			value={value}
			onChange={handleChange}
			name={name}
			className=' scrollbar overflow-auto h-28 w-full resize-none rounded-lg border border-gray-border p-2.5 text-sm text-black-200 placeholder:text-sm placeholder:font-normal placeholder:text-gray-300'
			placeholder={placeholder}
		/>
	);
};

export default TextArea;
