import Accordion from '../../components/Accordion';
import Task from './Task';

const TaskItems = ({ groupedTasks }) => {
	return (
		<div className='flex flex-col items-start w-full gap-3'>
			{Object.keys(groupedTasks)?.map((name, index) => (
				<Accordion key={index} heading={name} count={groupedTasks[name].length}>
					{groupedTasks[name].map((task, index) => (
						<Task
							key={task.id}
							task={task}
							name={task.name}
							description={task.description}
							status={task.status}
						/>
					))}
				</Accordion>
			))}
		</div>
	);
};

export default TaskItems;
