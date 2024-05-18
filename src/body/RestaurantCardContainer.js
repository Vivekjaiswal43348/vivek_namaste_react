import RestCard from "./RestCard";
import { RestaurantData } from "../utils/mockData";
import { useState, useCallback, useEffect } from "react";

const RestaurantCardContainer = () => {
	/** the below line represents the following htings:
	 * 1. Array destructuring
	 * 2. when ever this setter method will be called, it will trigger diffing algorithm
	 */
	// const restData = useState(RestaurantData); and below are same, the below line is an example
	// of array destructuring
	const [restList, setRestList] = useState([]);

	useEffect(() => {
		// useEffect witout array dependency: It will render onlu after Ui loads
		console.log("1");
	});
	useEffect(() => {
		// useEffect with array dependency: It will also render onlu after Ui loads
		console.log("2");
		getItemList();
	}, []);

	getItemList = async () => {
		// swiggy api: https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
		// zomato: https://www.zomato.com/webroutes/auth/init
		const result = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const parsedData = await result.json();
		const restAllData =
			parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		const resList = restAllData.map((item) => item.info);
		console.log("getItemList :", resList);
		setRestList(resList);
	};
	return (
		<>
			<div className="filter-item">
				<button
					className="get-best-rest-btn"
					onClick={() => {
						let filteredData = restList.filter((item) => item.avgRating > 4);
						setRestList(filteredData);
						console.log("clicked:", filteredData);
						// useCallback(()=>{
						// 	setRestList(filteredData);
						// 	console.log("clicked:", filteredData);
						// }, [restList])
					}}>
					Get best restaurants
				</button>
			</div>
			<div className="rest-card-container">
				{restList && restList.length ? (
					restList.map((item, index) => {
						return (
							<RestCard
								key={item.id}
								name={item.name}
								type={item.cuisines.join(", ")}
								rating={item.avgRating}
								image={item.cloudinaryImageId}
							/>
						);
					})
				) : (
					<>Loading...</>
				)}
			</div>
		</>
	);
};

export default RestaurantCardContainer;
