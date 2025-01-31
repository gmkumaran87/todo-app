const Input = ({ className, innerRef, ...rest }) => {
	// const classes =

	return (
		<input
			className='text-13 w-full focus:border-primary border rounded-md focus:ring-primary font-medium  border-gray-border py-4 pl-10 pr-3 placholder:text-sm'
			ref={innerRef}
			{...rest}
		/>
	);
};

export default Input;
