import Logo from "../../public/images/foodAppLogo.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	console.log("Header");
	return (
		<div className="header-wrapper">
			<div className="logo-block">
				<img alt="app-logo" src={Logo} />
			</div>
			<div className="nav-item-block">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About us</Link></li>
					<li><Link to="/contact">Contact Us</Link></li>
					<li>Cart</li>
					<li className="login-bth">
						<button
							style={{ backgroundColor: isLoggedIn ? "#61a461" : "#dc6c6c" }}
							onClick={() => {
								setIsLoggedIn(!isLoggedIn);
							}}>
							{isLoggedIn ? "Login" : "Logout"}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
