const Button = ({ label, clickHandler, type, color, width, bg, fontSize }) => {
	let classes = 'p-2.5 h-10 w-[110px] rounded-sm font-medium';

	if (color) classes += ` ${color} `;

	if (width) classes += ` ${width} `;

	if (bg) {
		classes += ` ${bg} border border-gray-border`;
	} else {
		classes += ' bg-blue-primary ';
	}

	if (fontSize) {
		classes += ` ${fontSize} `;
	} else {
		classes += ' text-sm ';
	}

	return (
		<button type={type} className={classes} onClick={clickHandler}>
			{label}
		</button>
	);
};

export default Button;
