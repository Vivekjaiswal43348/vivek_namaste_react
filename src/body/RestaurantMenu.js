import React, { useEffect, useState } from "react";
import RestCardShimmer from "../utils/restCardShimmer";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import FOOD_IMG_PLACEHOLDER from "./../../public/images/food_img_placeholder.png";

const RestaurantMenu = () => {
	const [resMenuData, setResMenuData] = useState(null);
	const { resID } = useParams();
	console.log("params:", resID);
	const fetchResMenuData = async () => {
		const SWIGGY_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resID}`;
		const result = await fetch(SWIGGY_URL);
		const json = await result.json();
		console.log("JSON:", json);

		setResMenuData(json);
	};
	useEffect(() => {
		fetchResMenuData();
	}, []);
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
		<div className="res-menu-container">
			<button
				onClick={() => {
					history.back();
				}}
				className="go-bk-btn">
				Go Back
			</button>
			<div className="detail-header">
				<h2>{name}</h2>
				<h4>{`${avgRatingString} (${totalRatingsString}) . ${costForTwoMessage}`}</h4>
			</div>
			<div className="recommended-list">
				{itemCards && <h2>Recommended ({itemCards.length})</h2>}
				<ul style={{ listStyle: "none" }}>
					{itemCards ? (
						itemCards.map((item) => {
							return (
								<li key={item.card.info.id}>
									<div className="food-row">
										<div className="left-section">
											<p className="item-name">{item.card.info.name}</p>
											<p className="item-price">{`Rs.${
												item.card.info.price / 100
											}`}</p>
											<p>
												<span className="item-rating">
													{`*${item.card.info.ratings.aggregatedRating.rating}`}
												</span>
												<span className="item-rating-count">
													{` (${item.card.info.ratings.aggregatedRating.ratingCountV2})`}
												</span>
											</p>
											<p className="item-desc">{item.card.info.description}</p>
										</div>
										<div className="right-section">
											<img
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
							<h5 className="no-data">No Data Found</h5>
						</>
					)}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
