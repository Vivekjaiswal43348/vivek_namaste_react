import RestCardShimmer from "../../utils/restCardShimmer";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import FOOD_IMG_PLACEHOLDER from "./../../../public/images/food_img_placeholder.png";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resID } = useParams();
	console.log("params:", resID);
	const resMenuData = useRestaurantMenu(resID);

	if (resMenuData === null) return <RestCardShimmer />;
	console.log(
		"data",
		resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
			?.card?.card?.itemCards
	);
	const { name, costForTwoMessage, avgRatingString, totalRatingsString } =
		resMenuData?.data?.cards[2]?.card.card.info;
	const itemCards =
		resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
			?.card?.card?.itemCards;
	return (
		<div className="mx-32 my-6">
			<div className="flex justify-between items-center">
			<div className="my-3">
				<h2 className="text-lg font-bold underline">{name}</h2>
				<h4 className="text-sm">{`${avgRatingString} (${totalRatingsString}) . ${costForTwoMessage}`}</h4>
			</div>
			<button
				onClick={() => {
					history.back();
				}}
				className="w-24 bg-sky-100 hover:shadow-md">
				⬅️Go Back
			</button>
			</div>
			<div className="">
				{itemCards && 
				<h2 className="text-lg font-medium underline">Recommended ({itemCards.length})</h2>}
				<ul style={{ listStyle: "none" }}>
					{itemCards ? (
						itemCards.map((item) => {
							return (
								<li key={item.card.info.id} className="m-8">
									<div className="flex justify-between">
										<div className="left-section">
											<p className="font-medium">{item.card.info.name}</p>
											<p className="text-sm">{`Rs.${
												item.card.info.price / 100
											}`}</p>
											{item.card.info.ratings.aggregatedRating.rating && <p>
												<span className="text-sm">
													{`*${item.card.info.ratings.aggregatedRating.rating}`}
												</span>
												<span className="">
													{` (${item.card.info.ratings.aggregatedRating.ratingCountV2})`}
												</span>
											</p>}
											<p className="text-xs">{item.card.info.description}</p>
										</div>
										<div className="w-24 p-2">
											<img
											className="rounded-sm"
												alt="item-img"
												src={
													item.card.info.imageId
														? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
														  item.card.info.imageId
														: FOOD_IMG_PLACEHOLDER
												}
											/>
										</div>
									</div>
									<hr></hr>
								</li>
							);
						})
					) : (
						<>
							<h5 className="text-center	font-bold text-gray-400">No Data Found</h5>
						</>
					)}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
