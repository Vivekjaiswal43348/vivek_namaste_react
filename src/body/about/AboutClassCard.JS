import React from "react";
import "./about.css";

class AboutClassCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			email: "vivekkumar@blackdiamond.com",
		};
		console.log(this.props.name, ": constructor: 1");
	}
	componentDidMount() {
		console.log(this.props.name, "this.props.name : componentDidMount: 4");
	}
	// componentDidUpdate() {
	// 	console.log("componentDidUpdate: 5");
	// }
	componentWillUnmount() {
		console.log("componentWillUnmount: 3");
	}
	render() {
		console.log(this.props.name, "this.props.name: render: 2");
		return (
			<div className="abount-card">
				{/* <p>count: {this.state.count}</p>
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
				</button> */}
				<img src={this.props.avatar} style={{width: "150px"}}/>
				<p>Name: {this.props.name}</p>
				<p>Location: {this.props.location}</p>
				<p>Email: {this.state.email}</p>
				<p>About Me: {this.props.desc}</p>
			</div>
		);
	}
}

export default AboutClassCard;
