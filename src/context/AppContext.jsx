import { createContext, useContext, useMemo, useState } from 'react';

export const TaskContext = createContext();

const intialValue = { tasks: [] };

export const TaskContextWrapper = ({ children }) => {
	const [state, setState] = useState(intialValue);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function createTask({ name, description }) {
		console.log('Tasks', state.tasks);
		const tasks = state.tasks;

		setState((prev) => {
			return {
				...prev,
				tasks: [
					...tasks,
					{
						id: tasks.length + 1,
						name,
						description,
						status: 'Pending',
						createdAt: new Date().toDateString(),
					},
				],
			};
		});
	}

	const memoizedValue = useMemo(
		() => ({
			...state,
			createTask,
		}),
		[state, createTask]
	);
	console.log('State', state);
	return <TaskContext.Provider value={memoizedValue}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => useContext(TaskContext);
