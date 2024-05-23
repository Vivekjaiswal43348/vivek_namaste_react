import React from "react";
import "./about.css";

class AboutClassCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			email: "vivekkumar@blackdiamond.com",
		};
		console.log("constructor: 1");
	}
	componentWillUnmount() {
		console.log("componentWillUnmount: 3");
	}
	componentDidMount() {
		console.log("componentDidMount: 4");
	}
	componentDidUpdate() {
		console.log("componentDidUpdate: 5");
	}
	render() {
		console.log("render: 2");
		return (
			<div className="abount-card">
				<p>count: {this.state.count}</p>
				<button
					onClick={() => {
						this.setState({ count: this.state.count + 1 });
					}}>
					Add
				</button>
				<button
					onClick={() => {
						this.setState({ count: this.state.count - 1 });
					}}>
					Subtract
				</button>
				<p>Name: {this.props.name}</p>
				<p>Location: Vivek Jaiswal</p>
				<p>Email: {this.state.email}</p>
			</div>
		);
	}
}

export default AboutClassCard;
