/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 1000;
`;

const CreateNewHotelContainer = styled.div`
	width: 966px;
	height: 938px;
	border-radius: 11px;
	border: 1px solid #dfe1e5;
	padding: 20px;
	background-color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow-y: auto;
	overflow-x: hidden;
	z-index: 1001;
`;

const CreateNewHotelHeader = styled.div`
	width: 884.05px;
	margin-top: 60px;
	align-items: center;
	padding-bottom: 20px;
	display: flex;
	border-bottom: 1px dashed #dfe1e5;
`;

const CreateNewHotelHeaderTitle = styled.h2`
	font-size: 24px;
	font-weight: 600;
	color: black;
	margin-left: 20px;
`;
const CreateNewHotelHeaderIcon = styled.div`
	width: 24px;
	height: 24px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
`;

const FormRow = styled.div`
	display: flex;
	gap: 24px;
	margin-bottom: 24px;
`;

const FormGroup = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	font-size: 15px;
	color: #222;
	margin-bottom: 8px;
`;

const Input = styled.input`
	padding: 12px;
	border: 1px solid #dfe1e5;
	border-radius: 8px;
	font-size: 16px;
`;

const Select = styled.select`
	padding: 12px;
	border: 1px solid #dfe1e5;
	border-radius: 8px;
	font-size: 16px;
`;

const PhotoUpload = styled.div<{ error?: boolean }>`
	border: 1px solid ${(props) => (props.error ? "#f44336" : "#dfe1e5")};
	border-radius: 12px;
	background: #fafafa;
	height: 236.12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #b0b0b0;
	font-size: 16px;
	margin-bottom: 8px;
	cursor: pointer;
	transition: border 0.2s;
`;

const PhotoIcon = styled.div`
	margin-bottom: 8px;
`;

const SubmitButton = styled.button`
	margin-top: 32px;
	align-self: flex-end;
	background: #444;
	color: #fff;
	border: none;
	border-radius: 8px;
	padding: 12px 32px;
	font-size: 17px;
	cursor: pointer;
	transition: background 0.2s;
	&:hover {
		background: #222;
	}
`;

const ErrorMsg = styled.div`
	color: #f44336;
	font-size: 13px;
	margin-top: 4px;
`;

const SuccessMsg = styled.div`
	color: #2ecc40;
	font-size: 16px;
	margin-top: 12px;
	text-align: right;
`;

type Props = {
	onClose: () => void;
};

const DEVISES = [
	{ value: "F XOF", label: "F XOF" },
	{ value: "EURO", label: "EURO" },
	{ value: "DOLLAR", label: "DOLLAR" },
];

export default function CreateNewHotel({ onClose }: Props) {
	const containerRef = useRef<HTMLDivElement>(null);

	const [fields, setFields] = useState({
		name: "",
		address: "",
		email: "",
		phone: "",
		pricePerNight: "",
		devise: "F XOF",
	});
	const [photo, setPhoto] = useState<File | null>(null);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: "" }));
	};

	const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setPhoto(file);
			setErrors((prev) => ({ ...prev, photo: "" }));
		}
	};

	const validate = () => {
		const newErrors: { [key: string]: string } = {};
		if (
			!fields.name.trim() ||
			fields.name.length < 2 ||
			fields.name.length > 100
		) {
			newErrors.name = "Le nom doit faire entre 2 et 100 caractères";
		}
		if (!fields.address.trim()) {
			newErrors.address = "L'adresse est requise";
		}
		if (!fields.email.trim() || !/^\S+@\S+\.\S+$/.test(fields.email)) {
			newErrors.email = "Adresse email invalide";
		}
		if (!fields.phone.trim() || !/^\+?\d{7,15}$/.test(fields.phone)) {
			newErrors.phone = "Numéro de téléphone invalide";
		}
		const price = Number(fields.pricePerNight);
		if (!fields.pricePerNight.trim() || isNaN(price) || price < 0) {
			newErrors.pricePerNight = "Le prix doit être un nombre positif";
		}
		if (
			!fields.devise ||
			!DEVISES.map((d) => d.value).includes(fields.devise)
		) {
			newErrors.devise = "Devise invalide";
		}
		if (!photo) {
			newErrors.photo = "La photo est requise";
		}
		return newErrors;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSuccess("");
		const newErrors = validate();
		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) return;

		setLoading(true);
		const formData = new FormData();
		formData.append("name", fields.name.trim());
		formData.append("address", fields.address.trim());
		formData.append("email", fields.email.trim());
		formData.append("phone", fields.phone.trim());
		formData.append("pricePerNight", fields.pricePerNight.trim());
		formData.append("devise", fields.devise);
		if (photo) formData.append("photo", photo);

		try {
			const res = await fetch(
				"https://hotel-api-9p5w.onrender.com/api/hotels",
				{
					method: "POST",
					body: formData,
				}
			);
			const data = await res.json();
			if (!res.ok) {
				if (data.errors) {
					const apiErrors: { [key: string]: string } = {};
					for (const key in data.errors) {
						apiErrors[key] = data.errors[key].message || "Erreur";
					}
					setErrors(apiErrors);
				} else if (data.message) {
					setErrors({ global: data.message });
				} else {
					setErrors({ global: "Erreur lors de la création" });
				}
			} else {
				setSuccess("Hôtel créé avec succès !");
				setFields({
					name: "",
					address: "",
					email: "",
					phone: "",
					pricePerNight: "",
					devise: "F XOF",
				});
				setPhoto(null);
				setErrors({});
				setTimeout(() => {
					setSuccess("");
					onClose();
				}, 1200);
			}
		} catch (err) {
			setErrors({ global: "Erreur réseau" });
		} finally {
			setLoading(false);
		}
	};

	// Empêche la propagation du clic sur la modale
	const handleContainerClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<Overlay onClick={onClose}>
			<CreateNewHotelContainer
				ref={containerRef}
				onClick={handleContainerClick}
			>
				<CreateNewHotelHeader>
					<CreateNewHotelHeaderIcon>
						<Image
							src="/arrow-left.png"
							alt="retour Icon"
							width={24}
							height={24}
							onClick={onClose}
						/>
					</CreateNewHotelHeaderIcon>
					<CreateNewHotelHeaderTitle>
						CREER UN NOUVEAU HOTEL
					</CreateNewHotelHeaderTitle>
				</CreateNewHotelHeader>
				<Form onSubmit={handleSubmit} encType="multipart/form-data">
					<FormRow>
						<FormGroup>
							<Label>{`Nom de l'hôtel`}</Label>
							<Input
								type="text"
								name="name"
								value={fields.name}
								onChange={handleChange}
								placeholder="CAP Marniane"
								autoComplete="off"
							/>
							{errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
						</FormGroup>
						<FormGroup>
							<Label>Adresse</Label>
							<Input
								type="text"
								name="address"
								value={fields.address}
								onChange={handleChange}
								placeholder="Les îles du saloum, Mar Lodj"
								autoComplete="off"
							/>
							{errors.address && <ErrorMsg>{errors.address}</ErrorMsg>}
						</FormGroup>
					</FormRow>
					<FormRow>
						<FormGroup>
							<Label>E-mail</Label>
							<Input
								type="email"
								name="email"
								value={fields.email}
								onChange={handleChange}
								placeholder="information@gmail.com"
								autoComplete="off"
							/>
							{errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
						</FormGroup>
						<FormGroup>
							<Label>Numéro de téléphone</Label>
							<Input
								type="tel"
								name="phone"
								value={fields.phone}
								onChange={handleChange}
								placeholder="+221 77 777 77 77"
								autoComplete="off"
							/>
							{errors.phone && <ErrorMsg>{errors.phone}</ErrorMsg>}
						</FormGroup>
					</FormRow>
					<FormRow>
						<FormGroup>
							<Label>Prix par nuit</Label>
							<Input
								type="number"
								name="pricePerNight"
								value={fields.pricePerNight}
								onChange={handleChange}
								placeholder="25000"
								min={0}
								autoComplete="off"
							/>
							{errors.pricePerNight && (
								<ErrorMsg>{errors.pricePerNight}</ErrorMsg>
							)}
						</FormGroup>
						<FormGroup>
							<Label>Devise</Label>
							<Select
								name="devise"
								value={fields.devise}
								onChange={handleChange}
							>
								{DEVISES.map((d) => (
									<option key={d.value} value={d.value}>
										{d.label}
									</option>
								))}
							</Select>
							{errors.devise && <ErrorMsg>{errors.devise}</ErrorMsg>}
						</FormGroup>
					</FormRow>
					<Label>Ajouter une photo</Label>
					<PhotoUpload
						{...(errors.photo ? { error: true } : {})}
						onClick={() => document.getElementById("photoInput")?.click()}
					>
						<PhotoIcon>
							<Image
								src="/imagePlaceholder.png"
								alt="Ajouter une photo"
								width={40}
								height={40}
							/>
						</PhotoIcon>
						Ajouter une photo
						<input
							id="photoInput"
							type="file"
							accept="image/*"
							style={{ display: "none" }}
							onChange={handlePhotoChange}
						/>
					</PhotoUpload>
					{errors.photo && <ErrorMsg>{errors.photo}</ErrorMsg>}
					{errors.global && <ErrorMsg>{errors.global}</ErrorMsg>}
					<SubmitButton type="submit" disabled={loading}>
						{loading ? "Enregistrement..." : "Enregistrer"}
					</SubmitButton>
					{success && <SuccessMsg>{success}</SuccessMsg>}
				</Form>
			</CreateNewHotelContainer>
		</Overlay>
	);
}
