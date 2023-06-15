import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();

	return (
		<>
			<main>Order Confirmed!</main>
			{/* navigate(-1) goes back one page -2 two pages etc */}
			<button onClick={() => navigate(-1)}>Go back</button>
		</>
	);
};

export default OrderSummary;
