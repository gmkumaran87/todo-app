const Input = ({ paddingLeft, className, innerRef, error, ...rest }) => {
	let classes =
		'text-13 w-full focus:border-primary border rounded-md focus:ring-primary font-medium  border-gray-border py-4 pr-3 placholder:text-sm';

	if (paddingLeft) {
		classes += ` ${paddingLeft} `;
	} else {
		classes += ' pl-10';
	}
	return (
		<div className='flex flex-col justify-start items-start gap-1 w-full'>
			<input className={classes} ref={innerRef} {...rest} />
			{error?.msg ? <p className='text-red-400 text-xs'>{error?.msg}</p> : <></>}
		</div>
	);
};

export default Input;
