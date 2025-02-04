import { useState } from 'react';
import DownArrow from '../assets/DownArrow.svg';
import UpArrow from '../assets/UpArrow.svg';

const Accordion = ({ children, heading, count }) => {
	const [isShow, setIsShow] = useState(false);

	const handleClick = () => setIsShow((prev) => !prev);
	return (
		<div className='flex flex-col items-start justify-start w-full'>
			<div
				className='cursor-pointer flex justify-between items-center w-full py-2.5 px-3.5 bg-back-light border border-back-light'
				onClick={handleClick}
			>
				<h3 className='text-xs font-normal leading-4'>
					{heading} &nbsp;(
					<span className='font-bold leading-4'>{count}</span>)
				</h3>
				<img alt='toggle button' src={isShow ? UpArrow : DownArrow} />
			</div>
			{isShow && children}
		</div>
	);
};

export default Accordion;
