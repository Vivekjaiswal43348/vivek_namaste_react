import { useNavigate } from "react-router-dom";

const RestCard = (props) => {
	/**destructuring the props to get the individual variables */
	const { image, name, type, rating, totalRatings, deliveryTime, itemID } =
		props;
	const navigate = useNavigate();

	const cardClickHandler = () => {
		navigate("/restaurant/" + itemID);
	};
	return (
		<div className="rest-card" onClick={cardClickHandler}>
			<div className="food-img">
				<img
					alt="food"
					src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
				/>
			</div>
			<div className="food-description">
				<h3>{name}</h3>
				<h5>{type}</h5>
				<h5>{`${rating} ratings ${totalRatings}`}</h5>
				<h5>{`Delivery Time: ${deliveryTime} minutes`}</h5>
			</div>
		</div>
	);
};
export default RestCard;
