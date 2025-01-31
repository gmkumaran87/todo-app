import SearchIcon from './icons/Search';
import Input from './Input';

const SearchInput = () => {
	return (
		<div className='relative w-full'>
			<SearchIcon className='absolute left-[11px] top-[17px]' />
			<Input placeholder='Search a Task' />
		</div>
	);
};

export default SearchInput;
