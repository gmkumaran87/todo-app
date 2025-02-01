import React from 'react';
import { STATUS_LABEL } from '../constant/constant';

const SelectElement = ({ handleChange, name, value }) => {
	return (
		<select
			name={name}
			value={value}
			className='mt-2 p-3 w-full border border-gray-border rounded-sm'
			onChange={handleChange}
		>
			{STATUS_LABEL.map((el, index) => (
				<option key={index} value={el}>
					{/* <span className='bg-green size-3 rounded-full' /> */}
					{el}
				</option>
			))}
		</select>
	);
};

export default SelectElement;
