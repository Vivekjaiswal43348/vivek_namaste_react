import { useState } from "react";
import RestCardShimmer from "../../utils/restCardShimmer";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import CardAccordion from "./CardAccordion";

const RestaurantMenu = () => {
	const { resID } = useParams();
	const [selectedAccordionIndex, setSelectedAccordionIndex] = useState(null);
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

	const accordionData =
		resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(item) => {
				return (
					item.card.card["@type"] ===
					"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
				);
			}
		);

	return (
		<div className="mx-60 my-6">
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
			{accordionData.map((item, index) => (
				<>
					<CardAccordion
						data={item.card.card}
						key={index}
						isAccordionOpen={selectedAccordionIndex === index}
						currentIndex={index}
						selectedIndex={selectedAccordionIndex}
						setIndexVal={(val) => setSelectedAccordionIndex(val)}
					/>
				</>
			))}
		</div>
	);
};

export default RestaurantMenu;
