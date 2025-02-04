import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/home/Home';
import CreateTask from './pages/CreateTask';

import { TaskContextWrapper } from './context/AppContext';
import NavBar from './components/NavBar';
import EditTask from './pages/EditTask';

function App() {
	return (
		<TaskContextWrapper>
			<div className='w-[50%] flex justify-center items-start flex-col h-full overflow-hidden'>
				<NavBar />
				<Routes>
					<Route index element={<Home />} />
					<Route path='create-task' element={<CreateTask />} />
					<Route path='edit-task/:taskId' element={<EditTask />}>
						<Route path='' element={<CreateTask />} />
					</Route>
				</Routes>
			</div>
		</TaskContextWrapper>
	);
}

export default App;
