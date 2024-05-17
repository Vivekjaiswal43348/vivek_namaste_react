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
export default RestCard;
