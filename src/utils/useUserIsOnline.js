import { useEffect, useState } from "react";

const useUserIsOnline = () => {
	const [isOnline, setIsOnline] = useState();

	useEffect(() => {
		window.addEventListener("online", () => {
			setIsOnline(true);
		});
		window.addEventListener("offline", () => {
			setIsOnline(false);
		});
	}, []);

	return isOnline;
};

export default useUserIsOnline;
