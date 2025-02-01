import { createContext, useContext, useMemo, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

const intialValue = { tasks: [], currentId: 0 };

export const TaskContextWrapper = ({ children }) => {
	const [state, setState] = useState(intialValue);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function createTask({ name, description }) {
		const tasks = state.tasks;
		const currentId = state.currentId;

		setState((prev) => {
			return {
				...prev,
				currentId: currentId + 1,
				tasks: [
					...tasks,
					{
						id: currentId + 1,
						name,
						description,
						status: 'Pending',
						createdAt: new Date().toDateString(),
					},
				],
			};
		});
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	function editTask(obj) {
		const updatedTask = state?.tasks.map((el) => (el.id === +obj.id ? obj : el));
		setState((prev) => ({ ...prev, tasks: updatedTask }));
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function deleteTask(id) {
		const tasks = state?.tasks;
		const newTasks = tasks.filter((task) => task.id !== id);
		setState((prev) => ({ ...prev, tasks: newTasks }));
	}

	const memoizedValue = useMemo(
		() => ({
			...state,
			createTask,
			editTask,
			deleteTask,
		}),
		[state, createTask, editTask, deleteTask]
	);
	return <TaskContext.Provider value={memoizedValue}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => useContext(TaskContext);
