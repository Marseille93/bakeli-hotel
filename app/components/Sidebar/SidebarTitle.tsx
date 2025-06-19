"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
const Title = styled.h1`
	font-size: 26.66px;
	color: #ffffffde;
	margin-left: 16px;
	font-weight: 700;
	font-size: 26.66px;
	line-height: 21.33px;
	letter-spacing: 0%;
	vertical-align: middle;
`;
const TitleContainer = styled.div`
	display: flex;
	height: 74.66px;
	width: 100%;
	align-items: center;
	position: relative;
	z-index: 1;
	padding-left: 21px;
`;

export default function SidebarTitle() {
	return (
		<TitleContainer>
			<Image src="/red-product.png" alt="Red Product" width={32} height={32} />
			<Title>RED PRODUCT</Title>
		</TitleContainer>
	);
}
