import React from "react";

const RestCardVegNonVegHOC = (RestCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-green-700 text-white pb-[2px] px-[2px] text-xs rounded-sm">
					veg
				</label>
				<RestCard {...props} />
			</div>
		);
	};
};

export default RestCardVegNonVegHOC;
