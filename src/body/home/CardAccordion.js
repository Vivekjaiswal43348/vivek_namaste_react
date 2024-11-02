import React from "react";
import FOOD_IMG_PLACEHOLDER from "./../../../public/images/food_img_placeholder.png";

const CardAccordion = (data) => {
	const itemCards = data.data.itemCards;
	const accordionSelectHandler = () => {
		/** toggle accordion on clicking the accordion row */
		data?.setIndexVal(
			data.currentIndex !== data.selectedIndex
				? data.currentIndex
				: null
		);
	};

	return (
		<div
			className={`border border-gray-200 p-[3] mb-1 rounded-md bg-gray-200 cursor-pointer ${
				!data.isAccordionOpen && "hover:border-green-400"
			}`}>
			<div
				className={`flex justify-between p-[6] rounded-sm ${
					data.isAccordionOpen && "bg-zinc-300"
				}`}
				onClick={() => accordionSelectHandler()}>
				<p
					className={
						data.isAccordionOpen ? "font-bold underline" : "font-bold"
					}>
					{data.data.title}
				</p>
				{/* DOWN Icon */}
				{!data.isAccordionOpen && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="size-4">
						<path
							fill-rule="evenodd"
							d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				)}
				{/* UP Icon */}
				{data.isAccordionOpen && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="size-4">
						<path
							fill-rule="evenodd"
							d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				)}
			</div>
			{data.isAccordionOpen && (
				<div className="">
					<ul style={{ listStyle: "none" }}>
						{itemCards ? (
							itemCards.map((item) => {
								return (
									<li key={item.card.info.id} className="m-2">
										<div className="flex justify-between">
											<div className="left-section w-[70%]">
												<p className="font-medium">{item.card.info.name}</p>
												<p className="text-sm">{`Rs.${
													item.card.info.price / 100
												}`}</p>
												{item.card.info.ratings.aggregatedRating.rating && (
													<p>
														<span className="text-sm">
															{`*${item.card.info.ratings.aggregatedRating.rating}`}
														</span>
														<span className="">
															{` (${item.card.info.ratings.aggregatedRating.ratingCountV2})`}
														</span>
													</p>
												)}
												<p className="text-xs">{item.card.info.description}</p>
											</div>
											<div className=" p-2">
												<img
													className="rounded-sm w-[100] h-[100] object-cover"
													alt="item-img"
													src={
														item.card.info.imageId
															? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
															  item.card.info.imageId
															: FOOD_IMG_PLACEHOLDER
													}
												/>
											</div>
										</div>
										<hr></hr>
									</li>
								);
							})
						) : (
							<>
								<h5 className="text-center	font-bold text-gray-400">
									No Data Found
								</h5>
							</>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};

export default CardAccordion;
