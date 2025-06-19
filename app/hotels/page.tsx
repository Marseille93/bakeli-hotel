"use client";
import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PageInformation from "../components/PageInformation";
import HotelsListe from "../components/HotelsListe";

const HotelsContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #f0f2f5;
	display: flex;
`;
const HotelsContent = styled.div`
	flex: 1;
`;
export default function Hotels() {
	return (
		<HotelsContainer>
			<Sidebar />
			<HotelsContent>
				<Navbar />
				<PageInformation />
				<HotelsListe />
			</HotelsContent>
		</HotelsContainer>
	);
}
