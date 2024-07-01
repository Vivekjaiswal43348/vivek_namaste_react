import { useEffect, useState } from "react";

const useRestaurantMenu = (resID) => {
    console.log('from custom hook');
	const [resMenuData, setResMenuData] = useState(null);

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

    return resMenuData;
};

export default useRestaurantMenu;
