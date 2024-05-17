import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "/public/images/foodAppLogo.jpeg";
import "/src/header/header.css";
import "/src/body/restCard.css";

import Header from "./header/Header";
import RestaurantCardContainer from "./body/RestaurantCardContainer";

const App = () => {
	return (
		<div>
			<Header />
			<RestaurantCardContainer />
			{/* Footer */}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
