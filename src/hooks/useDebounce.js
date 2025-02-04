import { useEffect, useState } from 'react';

function useDebounce(word, delay = 300) {
	const [searchItem, setSearchItem] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setSearchItem(word);
		}, delay);
	}, [delay, word]);

	return [searchItem];
}

export default useDebounce;
