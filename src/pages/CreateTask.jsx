import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useTaskContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router';

const CreateTask = () => {
	const [taskDetail, setTaskDetail] = useState({ name: '', description: '', status: 'Pending' });
	const [error, setError] = useState({});
	const { createTask, tasks, editTask } = useTaskContext();
	const navigate = useNavigate();
	const params = useParams();

	const taskId = +params.taskId;

	useEffect(() => {
		if (params?.taskId) {
			const newTask = tasks.find((el) => +taskId === el.id);

			setTaskDetail({
				id: taskId,
				createdAt: newTask.createdAt,
				name: newTask.name,
				description: newTask.description,
			});
		}
	}, [taskId, tasks]);

	useEffect(() => {
		if (error?.field) {
			setTimeout(() => {
				setError({});
			}, [400]);
		}
	}, [error?.field]);
	const handleChange = (e) => {
		const { value, name } = e.target;

		setTaskDetail((prev) => ({ ...prev, [name]: value }));
	};

	const handleCreateUpdate = () => {
		if (validation(taskDetail)) {
			return;
		}
		if (taskId) {
			editTask(taskDetail);
		} else {
			createTask(taskDetail);
			setTaskDetail({ name: '', description: '' });
		}
	};

	const validation = (taskDetail) => {
		if (taskDetail?.name === '') {
			setError({ field: 'name', msg: 'Please enter the title' });
			return true;
		} else if (taskDetail?.description === '') {
			setError({ field: 'description', msg: 'Please enter the description' });
			return true;
		}
		return false;
	};
	const handleCancel = () => {
		navigate('/');
	};
	return (
		<div className='flex w-full gap-4 flex-col items-start justify-start p-4 overflow-hidden h-full'>
			<Input
				placeholder='Enter the title'
				value={taskDetail.name}
				onChange={handleChange}
				name='name'
				error={error}
				paddingLeft='pl-3'
			/>
			<textarea
				value={taskDetail.description}
				onChange={handleChange}
				name='description'
				id='w3review'
				className=' scrollbar overflow-auto h-28 w-full resize-none rounded-lg border border-gray-border p-2.5 text-sm text-black-200 placeholder:text-sm placeholder:font-normal placeholder:text-gray-300'
				placeholder='Enter the description'
			/>
			{taskId ? (
				<select
					name='status'
					className='mt-2 p-3 w-full border border-gray-border rounded-sm'
					onChange={handleChange}
				>
					{['Pending', 'Completed', 'InProgress'].map((el, index) => (
						<option key={index} value={el} data-content='EEE'>
							{/* <span className='bg-green size-3 rounded-full' /> */}
							{el}
						</option>
					))}
				</select>
			) : (
				<></>
			)}
			<div className='w-full flex items-center justify-between mt-5'>
				<Button label='Cancel' bg='bg-transparent' clickHandler={handleCancel} />
				<Button
					label={taskId ? 'UPDATE' : 'ADD'}
					color='text-white'
					clickHandler={handleCreateUpdate}
					disabled={taskDetail?.name.length === 0}
				/>
			</div>
		</div>
	);
};

export default CreateTask;
