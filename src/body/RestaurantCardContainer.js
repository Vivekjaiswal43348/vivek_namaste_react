import RestCard from "./RestCard";
import { RestaurantData } from "../utils/mockData";
import { useState, useCallback, useEffect } from "react";
import RestCardShimmer from "../utils/restCardShimmer";
import axios from "axios";

const RestaurantCardContainer = () => {
	/** the below line represents the following htings:
	 * 1. Array destructuring
	 * 2. when ever this setter method will be called, it will trigger diffing algorithm
	 */
	// const restData = useState(RestaurantData); and below are same, the below line is an example
	// of array destructuring
	const [restList, setRestList] = useState([]);
	const [searchedText, setSearchedText] = useState("");
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		// useEffect witout array dependency: It will render onlu after Ui loads
		console.log("1");
	});

	getItemList = async () => {
		// swiggy api: https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
		// zomato: https://www.zomato.com/webroutes/auth/init
		// const result = await fetch(
		// 	"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		// );
		const result = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		// const parsedData = await result.json();
		const parsedData = result.data;
		const restAllData =
			parsedData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		const resList = restAllData.map((item) => item.info);
		console.log("getItemList :", resList);
		setRestList(resList);
		setFilteredList(resList);
	};
	console.log("Body:", searchedText);
	useEffect(() => {
		if (!searchedText) {
			setFilteredList(restList);
		} else {
			let items = restList.filter((item) => {
				return (
					item.name.toLowerCase().includes(searchedText.toLowerCase()) ||
					item.cuisines
						.join(", ")
						.toLowerCase()
						.includes(searchedText.toLowerCase())
				);
			});
			setFilteredList(items);
		}
	}, [searchedText]);

	getUpdatedList = async () => {
		let updateUrl = "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/update";
		let postPayload = {
			lat: 22.7199008,
			lng: 75.857383,
			nextOffset: "COVCELQ4KIDw3uj48Y3WNDCnEzgD",
			widgetOffset: {
				NewListingView_category_bar_chicletranking_TwoRows: "",
				NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
				Restaurant_Group_WebView_SEO_PB_Theme: "",
				collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
				inlineFacetFilter: "",
				restaurantCountWidget: "",
			},
			filters: {},
			seoParams: {
				seoUrl: "https://www.swiggy.com/",
				pageType: "FOOD_HOMEPAGE",
				apiName: "FoodHomePage",
			},
			page_type: "DESKTOP_WEB_LISTING",
			_csrf: "pKYCwJOrG95c-6lWle66HmogIildbg6gIvsdEvY8",
		};
		let res = await fetch(updateUrl, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: "follow", // manual, *follow, error
			referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(postPayload), // body data type must match "Content-Type" header
		});
		let data = await res.json();
		console.log("Updated data:", data);
	};

	useEffect(() => {
		// useEffect with array dependency: It will also render onlu after Ui loads
		console.log("2");
		getItemList();
		// getUpdatedList();
	}, []);

	return (
		<>
			<div className="filter-item">
				<div>
					<input
						className="inpt-txt"
						placeholder="Search by restaurant name or cusines"
						value={searchedText}
						onChange={(e) => setSearchedText(e.target.value)}
					/>
					<button className="search-btn">Search</button>
				</div>
				<div>
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
			</div>
			<div
				className="rest-card-container"
				onScroll={() => {
					console.log("scrolll");
				}}>
				{filteredList && filteredList.length ? (
					filteredList.map((item, index) => {
						return (
							<RestCard
								key={item.id}
								name={item.name}
								type={item.cuisines.join(", ")}
								rating={item.avgRating}
								image={item.cloudinaryImageId}
								totalRatings={item.totalRatingsString}
								deliveryTime={item.sla.deliveryTime}
							/>
						);
					})
				) : (
					<RestCardShimmer />
				)}
			</div>
			<div onScroll={() => {
					console.log("scrolll");
				}}	></div>
		</>
	);
};

export default RestaurantCardContainer;
