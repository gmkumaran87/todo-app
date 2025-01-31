import BackBtn from '../assets/BackPage.svg';
import { useNavigate } from 'react-router';

const NavBar = () => {
	const navigate = useNavigate();

	const handleBack = () => navigate('/');
	return (
		<nav className='px-6 w-full text-center h-16 bg-blue-primary text-white flex items-center justify-start font-bold text-2xl '>
			<img alt='Back button' src={BackBtn} onClick={handleBack} />
			<h1 className='flex-1'>TO-DO APP</h1>
		</nav>
	);
};

export default NavBar;
