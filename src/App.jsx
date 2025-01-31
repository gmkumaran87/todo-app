// import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/home/Home';
import CreateTask from './pages/CreateTask';
import { TaskContextWrapper } from './context/AppContext';
import NavBar from './components/NavBar';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<TaskContextWrapper>
			<div
				className='w-[50%] flex justify-center items-start flex-col h-full overflow-hidden
        '
			>
				<NavBar />
				<Routes>
					<Route index element={<Home />} />
					<Route path='create-task' element={<CreateTask />} />
				</Routes>
			</div>
		</TaskContextWrapper>
	);
}

export default App;
