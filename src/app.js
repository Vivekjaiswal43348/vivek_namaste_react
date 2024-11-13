import React, { Suspense, lazy, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
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
const AboutUS = lazy(() => import("./body/about/AboutUs"));

import ErrorFallbackBoundar from "./utils/ErrorFallbackBoundar";
import { ErrorBoundary } from "react-error-boundary";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
	const [authUserName, setAuthUserName] = useState("");

	useEffect(() => {
		setAuthUserName("Akshay");
	}, []);
	return (
		<Provider store={appStore}>
		<UserContext.Provider value={{ loggedInUser: authUserName, setAuthUserName }}>
			<div>
				{/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
					<Header />
				{/* </UserContext.Provider> */}
				{/* this should be there in body of page by default */}
				{/* <RestaurantCardContainer /> */}
				{/* this should be there in case of Aboust Us page */}
				{/* <AboutUs /> */}
				{/* this should be there in case of Contact Us page */}
				{/* Footer */}
				{/* <ContactUs /> */}
				<ErrorBoundary FallbackComponent={ErrorFallbackBoundar}>
					<Outlet />
				</ErrorBoundary>
				<Footer />
			</div>
		</UserContext.Provider>
		</Provider>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <RestaurantCardContainer /> },
			{
				path: "/about",
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<AboutUS />
					</Suspense>
				),
			},
			// { path: "/about", element: <AboutUS /> },
			{ path: "/contact", element: <ContactUs /> },
			{ path: "/restaurant/:resID", element: <RestaurantMenu /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
