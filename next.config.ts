import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compiler: {
		styledComponents: true, // ← activation obligatoire pour le SSR
	},
};

export default nextConfig;
