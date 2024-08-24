import Logo from "../../public/images/foodAppLogo.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useUserIsOnline from "../utils/useUserIsOnline";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	let isOnline = useUserIsOnline();
	console.log("Header", isOnline);
	return (
		<div className="flex justify-between p-5 bg-gray-100 items-center">
			<div className="w-24">
				<img alt="app-logo" src={Logo} />
			</div>
			<div className="">
				<ul className="flex gap-x-6">
					<li title={`User is ${isOnline === false ? "Offline 😒" : "Online 😍"}`} className="hover:cursor-pointer">
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
					<li className="login-bth">
						<button
							// style={{ backgroundColor: isLoggedIn ? "#61a461" : "#dc6c6c" }}	
							className={`${!isLoggedIn? 'bg-red-300' : 'bg-green-300'} p-1 text-sm rounded-sm w-[54px] `}
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
