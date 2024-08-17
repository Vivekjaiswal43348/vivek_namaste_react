import { useEffect, useState } from "react";

const useUserIsOnline = () => {
	// let isOnline;
	const [isOnline, setIsOnline] = useState();

	useEffect(() => {
		window.addEventListener("online", () => {
			// isOnline = true;
			setIsOnline(true);
		});
		window.addEventListener("offline", () => {
			// isOnline = false;
			setIsOnline(false);
		});
	}, []);

	return isOnline;
};

export default useUserIsOnline;
