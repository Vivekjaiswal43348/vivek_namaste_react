import Logo from "../../public/images/foodAppLogo.jpeg";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUserIsOnline from "../utils/useUserIsOnline";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate  = useNavigate();
	const userData = useContext(UserContext);

	let isOnline = useUserIsOnline();
	goToHomePage = () => {
		navigate("/");
	};
	return (
		<div className="flex flex-col justify-between p-5 bg-gray-100 items-center sm:flex-row">
			<div title="Go To home page" className="w-[100px] md:w-24 hidden sm:block cursor-pointer" onClick={goToHomePage}>
				<img alt="app-logo" src={Logo} />
			</div>
			<div className="">
				<ul className="flex gap-x-[10px] sm:gap-x-6 text-nowrap flex-wrap text-sm sm:text-base">
					<li
						title={`You are ${isOnline === false ? "Offline 😒" : "Online 😍"}`}
						className="hover:cursor-pointer">
						{`🛜 ${isOnline === false ? "❌" : "✅"}`}
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>Cart</li>
					<li>{userData.loggedInUser}</li>
					<li className="login-bth">
						<button
							// style={{ backgroundColor: isLoggedIn ? "#61a461" : "#dc6c6c" }}
							className={`${
								!isLoggedIn ? "bg-red-300" : "bg-green-300"
							} p-1 text-sm rounded-sm w-[54px] `}
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
