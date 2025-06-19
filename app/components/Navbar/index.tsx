"use client";
import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavbarContainer = styled.div`
	width: 1556px;
	height: 75px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 60px;
	color: black;
`;
const NavbarTitle = styled.h1`
	font-size: 26.66px;
	font-weight: bold;
`;

const Navbarpersonal = styled.div`
	font-size: 16px;
	color: black;
	display: flex;
	align-items: center;
`;

const NavbarPersonalImage = styled.div`
	width: 53px;
	height: 53px;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	margin-right: 10px;
`;

const OnlineDot = styled.div`
	position: absolute;
	bottom: 6px;
	right: 6px;
	width: 12px;
	height: 12px;
	background-color: #2ecc40; // Vert
	border: 2px solid white;
	border-radius: 50%;
	z-index: 2;
`;
const NavbarPersonalNotification = styled.div`
	width: 24px;
	height: 24px;
	margin-right: 20px;
	position: relative;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

const NavbarPersonalNotificationNumber = styled.div`
	position: absolute;
	top: -10px;
	right: -15px;
	width: 20px;
	height: 20px;
	background-color: #fcc100;
	color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
`;

const NavbarPersonalSearch = styled.div`
	width: 279.96px;
	height: 33.99px;
	margin-right: 20px;
	cursor: pointer;
	border-radius: 14px;
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	padding: 0 10px;
`;
const NavbarPersonalSearchInput = styled.input`
	margin-left: 10px;
	flex: 1;
	border: none;
	outline: none;
	font-size: 16px;
	color: black;
	background-color: transparent;
	&::placeholder {
		color: #ccc;
	}
`;

export default function Navbar() {
	const pathname = usePathname();
	const getNavbarTitle = (): string => {
		switch (pathname) {
			case "/dashboard":
				return "Dashboard";
			case "/hotels":
				return "Liste des Hôtels";
			default:
				return "Dashboard";
		}
	};
	return (
		<NavbarContainer>
			<NavbarTitle>{getNavbarTitle()}</NavbarTitle>
			<Navbarpersonal>
				<NavbarPersonalSearch>
					<Image src="/search.png" alt="rechercher" width={24} height={24} />
					<NavbarPersonalSearchInput
						type="text"
						placeholder="Rechercher..."
						aria-label="Rechercher"
					/>
				</NavbarPersonalSearch>
				<NavbarPersonalNotification>
					<Image src="/Symbol.png" alt="notification" width={24} height={24} />
					<NavbarPersonalNotificationNumber>3</NavbarPersonalNotificationNumber>
				</NavbarPersonalNotification>
				<NavbarPersonalImage>
					<Image src="/photo.png" alt="profil" width={53} height={53} />
					<OnlineDot />
				</NavbarPersonalImage>
				<Image src="/log-out.png" alt="déconnecter" width={24} height={24} />
			</Navbarpersonal>
		</NavbarContainer>
	);
}
