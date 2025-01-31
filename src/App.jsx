import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<nav className='text-center h-16 bg-blue-primary text-white flex items-center justify-center font-bold text-2xl'>
				TO-DO APP
			</nav>
			<Routes>
				<Route index element={<Home />} />
				<Route path='create-task' element={<CreateTask />} />
			</Routes>
		</>
	);
}

export default App;
