import { useEffect, useState } from "react";

const useRestaurantMenu = (resID) => {
    console.log('from custom hook');
	const [resMenuData, setResMenuData] = useState(null);

    const fetchResMenuData = async () => {
		const SWIGGY_URL = `https://namastedev.com/api/v1/listRestaurantMenu/${resID}`;
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
