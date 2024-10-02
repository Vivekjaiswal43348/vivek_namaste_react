import { useNavigate } from "react-router-dom";

const RestCard = (props) => {
	/**destructuring the props to get the individual variables */
	const { image, name, type, rating, totalRatings, deliveryTime, itemID } =
		props;
	const navigate = useNavigate();

	const cardClickHandler = () => {
		navigate("/restaurant/" + itemID);
	};
	// This logo is from: https://heroicons.com/
	const ClockLogo = (
		<svg
			className="inline-block w-[18]"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			// class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	);
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
					<div className="flex">
						{ClockLogo}
						<h5 className="text-sm text-gray-600">{`${deliveryTime} mins`}</h5>
					</div>
				</div>
				<h5 className="text-sm font-medium text-cyan-700">{`${rating} ratings ${totalRatings}`}</h5>
			</div>
		</div>
	);
};
export default RestCard;
