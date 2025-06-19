import React from "react";
import styled from "styled-components";
import Image from "next/image";

const SidebarBottomContainer = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	bottom: 0;
	height: 86.51pxpx;
`;
const SidebarBottomInfo = styled.div`
	font-size: 16.8px;
	margin-left: 16px;
	color: white;
	font-weight: 400;
	display: flex;
	align-items: center;
`;
const SidebarImage = styled.div`
	width: 53px;
	height: 53px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 15px;
	margin-top: 10px;
`;
const SidebarProfilContent = styled.div`
	font-size: 16px;
	color: white;
	margin-left: 10px;
	font-weight: 500;
`;
const SidebarProfilName = styled.h2`
	font-size: 16px;
	color: white;
	font-weight: 500;
`;
const SidebarProfilStatus = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
`;
const SidebarProfilStatusIcon = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: green;
	margin-right: 5px;
`;
export default function SidebarBottom() {
	return (
		<SidebarBottomContainer>
			<hr />
			<SidebarBottomInfo>
				<SidebarImage>
					<Image
						src="/photo.png"
						alt="photo de profil"
						width={53}
						height={53}
					/>
				</SidebarImage>
				<SidebarProfilContent>
					<SidebarProfilName>Mouhamet Badiane</SidebarProfilName>
					<SidebarProfilStatus>
						<SidebarProfilStatusIcon />
						<span>En ligne</span>
					</SidebarProfilStatus>
				</SidebarProfilContent>
			</SidebarBottomInfo>
		</SidebarBottomContainer>
	);
}
