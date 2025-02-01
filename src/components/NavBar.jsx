import BackBtn from '../assets/BackPage.svg';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router';

const NavBar = () => {
	const navigate = useNavigate();
	const searchParams = useLocation();

	const handleBack = () => navigate('/');
	return (
		<nav className='px-6 w-full text-center h-16 bg-blue-primary text-white flex items-center justify-start font-bold text-2xl '>
			{searchParams?.pathname !== '/' ? (
				<img alt='Back button' src={BackBtn} onClick={handleBack} className='cursor-pointer' />
			) : (
				<></>
			)}
			<h1 className='flex-1'>TO-DO APP</h1>
		</nav>
	);
};

export default NavBar;
