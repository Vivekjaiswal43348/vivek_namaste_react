import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "/public/images/foodAppLogo.jpeg";
import "/src/header/header.css";
import "/src/body/home/restCard.css";

import Header from "./header/Header";
import RestaurantCardContainer from "./body/home/RestaurantCardContainer";
import AboutUs from "./body/about/AboutUs";
import ContactUs from "./body/contact/ContactUs";
import ErrorPage from "./PageNotFound";
import RestaurantMenu from "./body/home/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Header />
			{/* this should be there in body of page by default */}
			{/* <RestaurantCardContainer /> */}
			{/* this should be there in case of Aboust Us page */}
			{/* <AboutUs /> */}
			{/* this should be there in case of Contact Us page */}
			{/* Footer */}
			{/* <ContactUs /> */}
			<Outlet/>
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <RestaurantCardContainer /> },
			{ path: "/about", element: <AboutUs /> },
			{ path: "/contact", element: <ContactUs /> },
			{ path: "/restaurant/:resID", element: <RestaurantMenu /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={router} />);
