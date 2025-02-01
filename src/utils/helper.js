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
