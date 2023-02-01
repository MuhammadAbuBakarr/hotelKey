import React from "react";
import WishListIcon from "../wishlist/WishListIcon";
import CardCarsouel2 from "./CardCarsouel2";
const Card = ({ props }) => {
	const { name, id, total_amount, city, all_images, is_hotel } = props;

	return (
		<div className="flex flex-col rounded-3xl hover:border hover:border-gray-500 pt-2 shadow-xl w-[300px] px-2">
			<div>
				<CardCarsouel2 props={all_images} />
			</div>
			<div className="flex justify-between items-center mt-2">
				{/* City */}
				<div className="text-base font-semibold">{city} ,Pakistan</div>
				<div className="flex items-center  w-14">
					<div>
						<img
							src="https://www.shutterstock.com/image-vector/black-star-vector-icon-600w-221796499.jpg"
							alt="image"
						/>
					</div>
					<div>4.76</div>
				</div>
			</div>
			{/* Hotel Name */}
			<div className="text-gray-400">{name}</div>
			<div className="text-gray-400">Feb 2-7</div>
			<div className=" flex  justify-between">
				<p>
					{/* Hotel Price */}
					<span className="text-base font-semibold">Rs.{total_amount}</span>
					/night
				</p>
				<div className="mr-3">
					<WishListIcon />
				</div>
			</div>
		</div>
	);
};

export default Card;
