import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Logo from "/public/images/foodAppLogo.jpeg";
import "/src/body/home/restCard.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import RestaurantCardContainer from "./body/home/RestaurantCardContainer";
// import AboutUS from "./body/about/AboutUs";
import ContactUs from "./body/contact/ContactUs";
import ErrorPage from "./PageNotFound";
import RestaurantMenu from "./body/home/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Optimize App: Lazy load/chunking/code splitting/dynamic loading
const AboutUS = lazy(()=> import("./body/about/AboutUs"));

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
			<Footer/>
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
			{ path: "/about", element: <Suspense fallback={<h1>Loading...</h1>}><AboutUS /></Suspense> },
			// { path: "/about", element: <AboutUS /> },
			{ path: "/contact", element: <ContactUs /> },
			{ path: "/restaurant/:resID", element: <RestaurantMenu /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={router} />);
