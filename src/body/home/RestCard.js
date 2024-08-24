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
		<div
			className="w-40 sm:w-48 p-1 cursor-pointer hover:bg-gray-100 hover:shadow-md"
			onClick={cardClickHandler}>
			<div className="p-1">
				<img
					className="rounded h-52"
					alt="food"
					src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
				/>
			</div>
			<div className="flex flex-col justify-between">
				<div className="">
					<h3 className="text-sm font-bold truncate ..." title={name}>
						{name}
					</h3>
					<h5 className="text-sm text-gray-600 truncate ..." title={type}>
						{type}
					</h5>
					<h5 className="text-sm text-gray-600">{`${deliveryTime} mins`}</h5>
				</div>
				<h5 className="text-sm font-medium text-cyan-700">{`${rating} ratings ${totalRatings}`}</h5>
			</div>
		</div>
	);
};
export default RestCard;
