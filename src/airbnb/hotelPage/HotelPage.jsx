import React from "react";
import { useParams } from "react-router-dom";
import HotelCarasoul from "./HotelCarasoul";
import HotelDetails from "./HotelDetails";
import HotelsOfferingList from "./HotelsOfferingList";
import ReviewMapping from "./ReviewMapping";
import BookingSection from "./BookingSection";
import HotelMap from "../maps/HotelMap";
import { useEffect } from "react";
import axios from "axios";
import { apiHeader } from "../../services/authHeader";
import { useState } from "react";
const HotelPage = () => {
	const [hotel, sethotel] = useState([]);
	const [images, setimages] = useState([]);

	const { id } = useParams();
	const imagesArr = [
		"https://hotelkey.pk/uploads/residencies/profile2/thumbnail-1675238823IMG-20230119-WA0001.jpg",
		"https://hotelkey.pk/uploads/residencies/profile2/thumbnail-1675238823IMG-20230119-WA0001.jpg",
		"https://hotelkey.pk/uploads/residencies/profile2/thumbnail-1675238823IMG-20230119-WA0001.jpg",
		"https://hotelkey.pk/uploads/residencies/profile2/thumbnail-1675238822IMG-20230119-WA00011.jpg",
		"https://hotelkey.pk/uploads/residencies/profile2/thumbnail-1675238822IMG-20230119-WA0002.jpg",
	];
	const getHotel = async () => {
		try {
			const { data, status } = await axios.get(
				`https://test.hotelkey.pk/api/get-residence/${id}`,
				apiHeader
			);
			if (status === 200) {
				sethotel(data.data);
				setimages(data.images);
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getHotel();
	}, []);

	return (
		<>
			<div className="flex flex-col justify-center items-center mt-9 ">
				{/* Carasoul */}
				<div className="flex justify-center border-2 border-black ">
					<HotelCarasoul props={images} />
				</div>
				{/* Hotel Name */}
				<div className="py-3 text-3xl font-semibold tracking-wide">
					{hotel.name},{" "}
					<span className="font-normal text-lg">
						{hotel.length !== 0 ? hotel.province.toUpperCase() : <></>}
					</span>
				</div>
				{/* Details */}
				<div className="w-full flex mt-6 flex-col px-2 justify-center items-center">
					<div className="w-full">
						<HotelDetails
							bed={hotel.bed}
							room={hotel.room}
							bathroom={hotel.bathroom}
							guest={hotel.guest}
						/>
					</div>
				</div>
				{/* Amenities */}
				<div className="justify-center items-center">
					<div className="p-4 flex justify-center font-semibold text-3xl ">
						Amenities
					</div>
					<div>
						<HotelsOfferingList
							tv={hotel.tv}
							door_lock={hotel.door_lock}
							kitchen={hotel.kitchen}
							parking={hotel.parking}
							aircondition={hotel.aircondition}
							camera={hotel.camera}
							washing={hotel.washing}
							wifi={hotel.wifi}
						/>
					</div>
				</div>
				{/* Booking Section */}
				<div className="mt-20  w-full flex justify-center flex-col items-center">
					<div className="text-3xl p-3 font-bold">Booking Details</div>

					<BookingSection price={hotel.price} />
				</div>
				{/* Reviews Section */}
				<div className="mt-10">
					<div className="text-3xl grid place-items-center font-bold">
						Reviews
					</div>
					<div className="p-4">
						<ReviewMapping />
					</div>
				</div>
				{/* Map Section */}
				<div className="text-3xl font-bold p-4">Hotel Location</div>
				<HotelMap lat={hotel.latitude} lon={hotel.longitude} />
				<div className="mt-9"></div>
			</div>
		</>
	);
};

export default HotelPage;
