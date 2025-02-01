import { Outlet } from 'react-router';

const EditTask = () => {
	return (
		<div className='h-full overflow-auto flex w-full gap-4 flex-col items-start justify-start p-4'>
			<Outlet />
		</div>
	);
};

export default EditTask;
