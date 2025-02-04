export const validation = (taskDetail) => {
	if (taskDetail?.name === '') {
		setError({ field: 'name', msg: 'Please enter the title' });
		return true;
	} else if (taskDetail?.description === '') {
		setError({ field: 'description', msg: 'Please enter the description' });
		return true;
	}
	return false;
};

export const groupBy = (arr) => {
	return arr.reduce((prev, curr) => {
		if (prev[curr.status] === undefined) {
			prev[curr.status] = [];
		}
		prev[curr.status].push(curr);
		return prev;
	}, {});
};

export function getSearchResult(arr, searchWord) {
	// console.log('Arr', arr);

	const res = arr.filter((el) => {
		let lowerName = el.name.toLowerCase();

		if (lowerName.includes(searchWord)) {
			return el;
		}
	});
	return res;
}
