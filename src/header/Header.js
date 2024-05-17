import Logo from "../../public/images/foodAppLogo.jpeg";

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

export default Header;