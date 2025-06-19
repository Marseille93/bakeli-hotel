/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HotelsListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 32px;
	padding: 24px;
	justify-content: flex-start;
	max-height: 80vh; // Limite la hauteur à 80% de la fenêtre
	overflow-y: auto; // Scroll vertical seulement si nécessaire
`;

const HotelCard = styled.div`
	width: 350.57px;
	height: 409.43px;
	background: #fff;
	border-radius: 18px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const HotelImage = styled.img`
	width: 100%;
	height: 272.95px;
	object-fit: cover;
	border-top-left-radius: 18px;
	border-top-right-radius: 18px;
`;

const HotelInfo = styled.div`
	padding: 20px 18px 0 18px;
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const HotelAddress = styled.div`
	color: #b36a5e;
	font-size: 15px;
	margin-bottom: 8px;
`;

const HotelName = styled.div`
	font-size: 22px;
	font-weight: 600;
	color: #222;
	margin-bottom: 10px;
`;

const HotelPrice = styled.div`
	font-size: 16px;
	color: #222;
	margin-top: auto;
	margin-bottom: 18px;
`;

const NoHotels = styled.div`
	width: 100%;
	text-align: center;
	color: #888;
	font-size: 22px;
	margin-top: 80px;
`;

export default function HotelsList() {
	const [hotels, setHotels] = useState([]);

	useEffect(() => {
		fetch("https://hotel-api-9p5w.onrender.com/api/hotels")
			.then((res) => res.json())
			.then((data) => setHotels(data))
			.catch(() => setHotels([]));
	}, []);

	return (
		<HotelsListContainer>
			{hotels.length === 0 ? (
				<NoHotels>Aucun hôtel</NoHotels>
			) : (
				hotels.map((hotel: any) => (
					<HotelCard key={hotel._id}>
						<HotelImage
							src={`https://hotel-api-9p5w.onrender.com/${hotel.photo}`}
							alt={hotel.name}
						/>
						<HotelInfo>
							<HotelAddress>{hotel.address}</HotelAddress>
							<HotelName>{hotel.name}</HotelName>
							<HotelPrice>
								{hotel.pricePerNight.toLocaleString()} {hotel.devise} par nuit
							</HotelPrice>
						</HotelInfo>
					</HotelCard>
				))
			)}
		</HotelsListContainer>
	);
}
