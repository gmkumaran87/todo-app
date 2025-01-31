import React from 'react';
import SearchInput from '../../components/SearchInput';
import { useNavigate } from 'react-router';
import { useTaskContext } from '../../context/AppContext';
import TaskItems from './TaskItems';

const Home = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate('/create-task');
	const { tasks } = useTaskContext();

	console.log(tasks);
	return (
		<div className='flex w-full flex-col items-start justify-between p-4 overflow-hidden h-full'>
			<div className='w-full flex flex-col items-start justify-start gap-5'>
				<SearchInput />
				<TaskItems tasks={tasks} />
			</div>
			<div className='w-full flex justify-end'>
				<div
					className='bg-blue-primary text-3xl text-white rounded-full size-[70px] flex items-center justify-center'
					onClick={handleClick}
				>
					+
				</div>
			</div>
		</div>
	);
};

export default Home;
