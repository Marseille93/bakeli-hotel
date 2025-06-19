"use client";
import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PageInformation from "./components/PageInformation";
import DashboardStats from "./components/DashboardStats";

const HomeContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #f0f2f5;
	display: flex;
`;
const HomeContent = styled.div`
	flex: 1;
`;
export default function Home() {
	return (
		<HomeContainer>
			<Sidebar />
			<HomeContent>
				<Navbar />
				<PageInformation />
				<DashboardStats />
			</HomeContent>
		</HomeContainer>
	);
}
