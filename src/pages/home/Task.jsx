import React from 'react';
import { useTaskContext } from '../../context/AppContext';
import { useNavigate } from 'react-router';
import Pencil from '../../assets/Pencil.svg';
import Trash from '../../assets/Trash.svg';

const STATUS_ICONS = {
	Pending: <span className='bg-gray-border size-2.5 rounded-full' />,
	Completed: <span className='bg-[#368A04] size-2.5 rounded-full' />,
	InProgress: <span className='bg-[#FFB03C] size-2.5 rounded-full' />,
};
const Task = ({ task, id, name, description, status }) => {
	const { deleteTask } = useTaskContext();
	const navigate = useNavigate();

	const editTask = () => navigate(`/edit-task/${task.id}`);
	return (
		<div className='flex flex-col items-start w-full gap-2 border-b border-gray-border p-3.5'>
			<div className='flex items-center justify-between w-full'>
				<div className='flex items-center justify-start gap-4'>
					<div className='rounded-full border font-normal border-blue-primary flex items-center justify-center text-blue-primary size-8'>
						{name.slice(0, 1).toUpperCase()}
					</div>
					<h3 className='text-blue-primary text-sm font-semibold'>{name}</h3>
				</div>
				<div className='flex items-center justify-start gap-1.5'>
					{STATUS_ICONS[status]}
					<p className='text-xs leading-4.5 font-normal'>{status}</p>
				</div>
			</div>
			{/* Description */}
			<p className='w-[90%] pl-12 text-left text-xs text-black-para font-normal leading-[18px]'>{description}</p>
			<div className='flex items-center justify-between w-full'>
				<p className='pl-12 mt-2 text-[10px] text-gray-light'>{task.createdAt}</p>
				<div className=' flex cursor-pointer justify-start items-center gap-2'>
					<img src={Trash} alt='Edit icon' className='size-6' onClick={() => deleteTask(+task.id)} />
					<img src={Pencil} alt='Edit icon' className='size-6' onClick={editTask} />
				</div>
			</div>
		</div>
	);
};

export default Task;
