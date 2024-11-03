import React from "react";
import AboutClassCard from "./AboutClassCard.JS";
import UserContext from "../../utils/UserContext";

class AboutUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			userInfo: {
				name: "User Name",
				location: "",
				email: "email@domain.com",
				bio: "",
				avatar_url: null,
			},
		};
		console.log("constructor: parent");
	}
	componentWillUnmount() {
		console.log("componentWillUnmount: : parent");
	}
	async componentDidMount() {
		console.log("componentDidMount: : parent");
		// this.setState({userInfo: {name: "name-1"}});

		const rawResult = await fetch(
			"https://api.github.com/users/Vivekjaiswal43348"
		);
		const jsonResult = await rawResult.json();

		console.log("RESPONSE:", jsonResult);
		this.setState({ userInfo: jsonResult });
	}
	componentDidUpdate() {
		console.log("componentDidUpdate: : parent");
	}
	render() {
		console.log("render: parent");
		return (
			<>
				<div>AboutUs</div>
				<p>Parent counter: {this.state.counter}</p>
				<button
					onClick={() => {
						this.setState({ counter: this.state.counter + 1 });
					}}>
					Add
				</button>
				<UserContext.Consumer>
					{(userContextData) => (
						<h1 className="font-bold">
							Logged In User: {userContextData.loggedInUser}
						</h1>
					)}
				</UserContext.Consumer>
				<div>
					<AboutClassCard
						name={this.state.userInfo.name}
						location={this.state.userInfo.location}
						avatar={this.state.userInfo.avatar_url}
						desc={this.state.userInfo.bio}
					/>
					{/* <AboutClassCard name={"Name-2"} /> */}
				</div>
			</>
		);
	}
}

export default AboutUs;
