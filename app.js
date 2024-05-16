import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "/public/images/foodAppLogo.jpeg";
import "/src/header/header.css";
import "/src/body/restCard.css";

// import Food1 from "/public/images/rest1.jpg";

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="logo-block">
				<img alt="app-logo" src={Logo} />
			</div>
			<div className="nav-item-block">
				<ul>
					<li>Home</li>
					<li>About us</li>
					<li>Contact Us</li>
					<li>Cart</li>
					<li>Login</li>
				</ul>
			</div>
		</div>
	);
};
// interface RestaurantDataType {
// 	resName: String;
// 	foodTypes: String;
// 	rating: String;
// 	img: String;
// }
const RestaurantData = [
	{
		resName: "Raju Food Center",
		foodTypes: "Chinees, North Indian",
		rating: "4.5 Stars",
		img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp",
		uuid: 1
	},
	{
		resName: "Punjabi tadka",
		foodTypes: "Punjabi, North Indian",
		rating: "4.9 Stars",
		img: "https://b.zmtcdn.com/data/pictures/chains/3/21129823/3a1562e15590d5610896148a66f1b712.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		uuid: 2
	},
	{
		resName: "Raju Food Center",
		foodTypes: "Chinees, North Indian",
		rating: "4.5 Stars",
		img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp",
		uuid: 3
	},
	{
		resName: "Punjabi tadka",
		foodTypes: "Punjabi, North Indian",
		rating: "4.9 Stars",
		img: "https://b.zmtcdn.com/data/pictures/chains/3/21129823/3a1562e15590d5610896148a66f1b712.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		uuid: 4
	},
	{
		resName: "Raju Food Center",
		foodTypes: "Chinees, North Indian",
		rating: "4.5 Stars",
		img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp",
		uuid: 5
	},
	{
		resName: "Punjabi tadka",
		foodTypes: "Punjabi, North Indian",
		rating: "4.9 Stars",
		img: "https://b.zmtcdn.com/data/pictures/chains/3/21129823/3a1562e15590d5610896148a66f1b712.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		uuid: 6
	},
	{
		resName: "Raju Food Center",
		foodTypes: "Chinees, North Indian",
		rating: "4.5 Stars",
		img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp",
		uuid: 7
	},
	{
		resName: "Punjabi tadka",
		foodTypes: "Punjabi, North Indian",
		rating: "4.9 Stars",
		img: "https://b.zmtcdn.com/data/pictures/chains/3/21129823/3a1562e15590d5610896148a66f1b712.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		uuid: 8
	},
	{
		resName: "Raju Food Center",
		foodTypes: "Chinees, North Indian",
		rating: "4.5 Stars",
		img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp",
		uuid: 9
	},
	{
		resName: "Punjabi tadka",
		foodTypes: "Punjabi, North Indian",
		rating: "4.9 Stars",
		img: "https://b.zmtcdn.com/data/pictures/chains/3/21129823/3a1562e15590d5610896148a66f1b712.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		uuid: 10
	},
];
const RestCard = (props) => {
	/**destructuring the props to get the individual variables */
	const { image, name, type, rating } = props;
	return (
		<div className="rest-card">
			<div className="food-img">
				<img alt="food" src={image} />
			</div>
			<div className="food-description">
				<h3>{name}</h3>
				<p>{type}</p>
				<p>{rating}</p>
			</div>
		</div>
	);
};

const RestaurantCardContainer = () => {
	return (
		<div className="rest-card-container">
			{/* <RestCard />
			<RestCard /> */}
			{RestaurantData.map((item, index) => {
				return (
					<RestCard
						key={item.uuid}
						name={item.resName}
						type={item.foodTypes}
						rating={item.rating}
						image={item.img}
					/>
				);
			})}
		</div>
	);
};
const App = () => {
	return (
		<div>
			{/* Header 
                1. Logo
                2. Nav Items
            */}
			<Header />
			{/* Body 
                1. Card conatiner and than cards
            */}
			<RestaurantCardContainer />
			{/* Footer */}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
