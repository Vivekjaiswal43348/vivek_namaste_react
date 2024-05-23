import React from "react";
import AboutClassCard from "./AboutClassCard.JS";
// import AboutFuncCard from "./AboutFuncCard";
class AboutUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
		console.log("constructor: parent");
	}
	componentWillUnmount() {
		console.log("componentWillUnmount: : parent");
	}
	componentDidMount() {
		console.log("componentDidMount: : parent");
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
				<div>
					<AboutClassCard name={"Vivek Jaiswal"} />
				</div>
			</>
		);
	}
}

export default AboutUs;
