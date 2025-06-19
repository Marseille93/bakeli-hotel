import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavigationContainer = styled.div`
	height: 750px;
	position: relative;
	z-index: 1;
	width: 100%;
`;
const NavigationTitle = styled.h2`
	weight: 400;
	font-size: 16.8px;
	margin-left: 16px;
`;
const NavigationList = styled.ul`
	list-style: none;
	font-weight: bold;
`;
const NavigationItem = styled.li<{ $active?: boolean }>`
	background-color: ${(props) => (props.$active ? "#F0F0F0" : "transparent")};
	color: ${(props) => (props.$active ? "black" : "white")};
	display: flex;
	font-size: 18.66px;
	weight: 500;
	padding: 12px;
	padding-left: 25px;
`;
const NavigationItemContent = styled.span`
	weight: 500;
	font-size: 18.66px;
	margin-left: 10px;
`;
export default function SidebarNavigation() {
	const pathname = usePathname();
	return (
		<NavigationContainer>
			<NavigationTitle>Principal</NavigationTitle>
			<NavigationList>
				<Link href="/">
					<NavigationItem $active={pathname === "/"}>
						<Image
							src="/layout-dashboard 1.png"
							alt="Home Icon"
							width={24}
							height={24}
						/>
						<NavigationItemContent>Dashboard</NavigationItemContent>
					</NavigationItem>
				</Link>
				<Link href="/hotels">
					<NavigationItem $active={pathname === "/hotels"}>
						<Image src="/Vector.png" alt="Home Icon" width={24} height={24} />
						<NavigationItemContent>Liste des hotels</NavigationItemContent>
					</NavigationItem>
				</Link>
			</NavigationList>
		</NavigationContainer>
	);
}
