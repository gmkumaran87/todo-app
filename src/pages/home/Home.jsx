import React, { useEffect, useState } from 'react';
import SearchInput from '../../components/SearchInput';
import { useNavigate } from 'react-router';
import { useTaskContext } from '../../context/AppContext';
import TaskItems from './TaskItems';
import { getSearchResult, groupBy } from '../../utils/helper';
import useDebounce from '../../hooks/useDebounce';

const Home = () => {
	const [searchWord, setSearchWord] = useState('');
	const [searchTerm] = useDebounce(searchWord);
	const [newTask, setNewTask] = useState([]);

	const navigate = useNavigate();
	const handleClick = () => navigate('/create-task');
	const { tasks } = useTaskContext();

	useEffect(() => {
		if (tasks?.length) setNewTask(tasks);
	}, [tasks]);

	useEffect(() => {
		if (searchTerm?.length) {
			setNewTask(getSearchResult(newTask || tasks, searchTerm));
		} else {
			setNewTask(tasks);
		}
	}, [searchTerm]);

	const handleChange = (e) => setSearchWord(e.target.value);
	console.log('Tasks', { tasks, newTask });
	return (
		<div className='flex w-full gap-3 flex-col items-start justify-between p-4 overflow-hidden h-full'>
			<div className='w-full flex flex-col items-start justify-start gap-5 overflow-auto'>
				<SearchInput searchWord={searchWord} handleChange={handleChange} />
				<TaskItems groupedTasks={groupBy(newTask)} />
			</div>
			<div className='w-full flex justify-end'>
				<div
					className='bg-blue-primary cursor-pointer text-3xl text-white rounded-full size-[70px] flex items-center justify-center'
					onClick={handleClick}
				>
					+
				</div>
			</div>
		</div>
	);
};

export default Home;
