import React from 'react';
import { useTaskContext } from '../../context/AppContext';
import Task from './Task';

const TaskItems = () => {
	const { tasks } = useTaskContext();
	return (
		<div className='flex flex-col items-start w-full'>
			{tasks?.map((task) => (
				<Task key={task.id} task={task} name={task.name} description={task.description} status={task.status} />
			))}
		</div>
	);
};

export default TaskItems;
