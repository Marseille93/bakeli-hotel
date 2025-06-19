import React from "react";
import styled from "styled-components";
const Rectangle = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(85, 89, 92, 1);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	opacity: 0.6;
`;
export default function SidebarRectangle() {
	return <Rectangle />;
}
