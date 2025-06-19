"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const StatsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 32px 40px;
	margin: 40px 0 0 0;
	padding: 0 0 0 40px;
`;

const StatCard = styled.div`
	background: #fff;
	border-radius: 18px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
	display: flex;
	align-items: center;
	width: 420px;
	height: 120px;
	padding: 0 32px;
	margin-bottom: 16px;
`;

const StatIcon = styled.div<{ bg: string }>`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background: ${(props) => props.bg};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 24px;
	color: #fff;
	font-size: 28px;
	font-weight: bold;
`;

const StatContent = styled.div`
	display: flex;
	flex-direction: column;
`;

const StatTitle = styled.div`
	font-size: 26px;
	font-weight: 400;
	color: #222;
	display: flex;
	align-items: baseline;
`;

const StatLabel = styled.span`
	font-size: 20px;
	font-weight: 400;
	margin-left: 8px;
	color: #444;
`;

const StatDesc = styled.div`
	font-size: 16px;
	color: #888;
	margin-top: 4px;
`;

export default function DashboardStats() {
	const [hotelCount, setHotelCount] = useState<number>(0);

	useEffect(() => {
		fetch("https://hotel-api-9p5w.onrender.com/api/hotels")
			.then((res) => res.json())
			.then((data) => setHotelCount(Array.isArray(data) ? data.length : 0))
			.catch(() => setHotelCount(0));
	}, []);

	return (
		<StatsGrid>
			<StatCard>
				<StatIcon bg="#B39DDB">
					<Image src="/mail.png" alt="mailIcone" width={28} height={28} />
				</StatIcon>
				<StatContent>
					<StatTitle>
						125<StatLabel>Formulaires</StatLabel>
					</StatTitle>
					<StatDesc>Je ne sais pas quoi mettre</StatDesc>
				</StatContent>
			</StatCard>
			<StatCard>
				<StatIcon bg="#1DE9B6">P</StatIcon>
				<StatContent>
					<StatTitle>
						40<StatLabel>Messages</StatLabel>
					</StatTitle>
					<StatDesc>Je ne sais pas quoi mettre</StatDesc>
				</StatContent>
			</StatCard>
			<StatCard>
				<StatIcon bg="#FFD600">
					<Image src="/users.png" alt="Utilisateurs" width={28} height={28} />
				</StatIcon>
				<StatContent>
					<StatTitle>
						600<StatLabel>Utilisateurs</StatLabel>
					</StatTitle>
					<StatDesc>Je ne sais pas quoi mettre</StatDesc>
				</StatContent>
			</StatCard>
			<StatCard>
				<StatIcon bg="#F44336">
					<Image src="/mail.png" alt="E-mails" width={28} height={28} />
				</StatIcon>
				<StatContent>
					<StatTitle>
						25<StatLabel>E-mails</StatLabel>
					</StatTitle>
					<StatDesc>Je ne sais pas quoi mettre</StatDesc>
				</StatContent>
			</StatCard>
			<StatCard>
				<StatIcon bg="#8E24AA">P</StatIcon>
				<StatContent>
					<StatTitle>
						{hotelCount}
						<StatLabel>Hôtels</StatLabel>
					</StatTitle>
					<StatDesc>Je ne sais pas quoi mettre</StatDesc>
				</StatContent>
			</StatCard>
			<StatCard>
				<StatIcon bg="#1976D2">
					<Image src="/users.png" alt="Entités" width={28} height={28} />
				</StatIcon>
				<StatContent>
					<StatTitle>
						02<StatLabel>Entités</StatLabel>
					</StatTitle>
					<StatDesc>Je ne sais pas quoi mettre</StatDesc>
				</StatContent>
			</StatCard>
		</StatsGrid>
	);
}
