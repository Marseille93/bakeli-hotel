"use client";
import React from "react";
import styled from "styled-components";
import SidebarTitle from "./SidebarTitle";
import SidebarRectangle from "./SidebarRectangle";
import SidebarNavigation from "./SidebarNavigation";
import SidebarBottom from "./SidebarBottom";

const SidebarContainer = styled.div`
	width: 364px;
	height: 100vh;
	background-image: url("/sidebar-bg.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: white;
	position: relative;
`;

export default function Sidebar() {
	return (
		<SidebarContainer>
			<SidebarRectangle />
			<SidebarTitle />
			<SidebarNavigation />
			<SidebarBottom />
		</SidebarContainer>
	);
}
