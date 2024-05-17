import RestCard from "./RestCard";
import { RestaurantData } from "../utils/mockData";

const RestaurantCardContainer = () => {
	return (
		<div className="rest-card-container">
			{RestaurantData.map((item, index) => {
				return (
					<RestCard
						key={item.uuid}
						name={item.resName}
						type={item.foodTypes}
						rating={item.rating}
						image={item.img}
					/>
				);
			})}
		</div>
	);
};

export default RestaurantCardContainer;