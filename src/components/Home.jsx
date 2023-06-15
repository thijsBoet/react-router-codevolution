import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<main>Home Page</main>
			<button onClick={() => navigate('order-summary')}>
				Place order
			</button>
		</>
	);
};

export default Home;
