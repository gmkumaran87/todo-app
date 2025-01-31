import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useTaskContext } from '../context/AppContext';

const CreateTask = () => {
	const [taskDetail, setTaskDetail] = useState({ name: '', description: '' });
	const { createTask } = useTaskContext();
	const handleChange = (e) => {
		const { value, name } = e.target;
		console.log(e.target.value);
		setTaskDetail((prev) => ({ ...prev, [name]: value }));
	};
	console.log(taskDetail);

	const handleCreate = () => {
		createTask(taskDetail);
	};
	return (
		<div className='flex w-full gap-4 flex-col items-start justify-start p-4 overflow-hidden h-full'>
			<Input placeholder='Enter the title' value={taskDetail.name} onChange={handleChange} name='name' />
			<textarea
				value={taskDetail.description}
				onChange={handleChange}
				name='description'
				id='w3review'
				className=' scrollbar overflow-auto h-28 w-full resize-none rounded-lg border border-gray-border p-2.5 text-sm text-black-200 placeholder:text-sm placeholder:font-normal placeholder:text-gray-300'
				placeholder='Enter the description'
			/>
			<div className='w-full flex items-center justify-between mt-5'>
				<Button label='Cancel' bg='bg-transparent' />
				<Button label='ADD' color='text-white' clickHandler={handleCreate} />
			</div>
		</div>
	);
};

export default CreateTask;
