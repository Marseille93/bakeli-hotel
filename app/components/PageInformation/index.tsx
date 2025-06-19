"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CreateNewHotel from "./CreateNewHotel";

const InformationContainer = styled.div`
	width: 1556px;
	height: 103px;
	background-color: white;
	align-items: center;
	position: relative;
	z-index: 0;
`;
const InformationHotelsContainer = styled.div`
	width: 1556px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 103px;
	background-color: white;
	align-items: center;
`;
const InformationTitle = styled.h2`
	margin-left: 60px;
	color: black;
	font-size: 32px;
`;
const InformationText = styled.p`
	font-size: 16px;
	margin-left: 60px;
	color: black;
	font-weight: 400;
	margin-top: 10px;
	margin-bottom: 10px;
`;
const Hr = styled.hr`
	width: 1556px;
	margin: 0;
	border: 0;
	border-top: 1px solid #ccc;
`;

const CreateHotelButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;
	color: black;
	border: 1px solid black;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	margin-right: 60px;
	font-size: 16px;
	&:hover {
		background-color: #f0f0f0;
		transition: background-color 0.3s ease;
	}
`;
export default function PageInformation() {
	const pathname = usePathname();
	const [showCreateHotel, setShowCreateHotel] = useState(false);

	const getInformationPage = () => {
		switch (pathname) {
			case "/":
				return (
					<InformationContainer>
						<InformationTitle>Bienvenue sur Red Product</InformationTitle>
						<InformationText>Ceci est le Dashboard</InformationText>
					</InformationContainer>
				);
			case "/hotels":
				return (
					<InformationHotelsContainer>
						<InformationTitle>Hotels</InformationTitle>
						<CreateHotelButton onClick={() => setShowCreateHotel(true)}>
							<Image
								src="/plus.png"
								alt="Créer un hôtel"
								width={20}
								height={20}
							/>
							Créer un nouveau hôtel
						</CreateHotelButton>
					</InformationHotelsContainer>
				);
		}
	};

	return (
		<InformationContainer>
			<Hr />
			{getInformationPage()}
			{showCreateHotel && (
				<CreateNewHotel onClose={() => setShowCreateHotel(false)} />
			)}
		</InformationContainer>
	);
}
