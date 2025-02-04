import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useTaskContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router';
import { validation } from '../utils/helper';
import TextArea from '../components/TextArea';
import { STATUS_LABEL } from '../constant/constant';
import SelectElement from '../components/SelectElement';

const CreateTask = () => {
	const [taskDetail, setTaskDetail] = useState({ name: '', description: '', status: 'Pending' });
	const [error, setError] = useState({});
	const { createTask, tasks, editTask } = useTaskContext();
	const navigate = useNavigate();
	const params = useParams();

	const taskId = params.taskId;

	useEffect(() => {
		if (params?.taskId) {
			const newTask = tasks.find((el) => +taskId === el.id);

			console.log('Useeffect', newTask, params, tasks);
			setTaskDetail({
				id: +taskId,
				// createdAt: newTask.createdAt,
				name: newTask.name,
				description: newTask.description,
				status: newTask.status,
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

	const handleCancel = () => navigate('/');

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
			<TextArea
				name='description'
				value={taskDetail.description}
				placeholder='Enter the description'
				handleChange={handleChange}
			/>

			{taskId && <SelectElement handleChange={handleChange} name='status' value={taskDetail.status} />}
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
