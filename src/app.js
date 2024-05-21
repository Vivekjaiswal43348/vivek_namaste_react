import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "/public/images/foodAppLogo.jpeg";
import "/src/header/header.css";
import "/src/body/restCard.css";

import Header from "./header/Header";
import RestaurantCardContainer from "./body/RestaurantCardContainer";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ErrorPage from "./PageNotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Header />

			<RestaurantCardContainer />
			{/* Footer */}
		</div>
	);
};

const router = createBrowserRouter([
	{ path: "/", element: <App />, errorElement: <ErrorPage /> },
	{ path: "/about", element: <AboutUs /> },
	{ path: "/contact", element: <ContactUs /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={router} />);
