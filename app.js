import React from "react";
import ReactDOM from "react-dom";
import Logo from '/public/images/foodAppLogo.jpeg';
import '/src/header/header.css';

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

			{/* Footer */}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
