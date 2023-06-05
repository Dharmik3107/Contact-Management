/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		screens: {
			xs: "280px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			...colors,
			apricot: "#ffd8be",
			blackMagic: "#2e2d2b",
			indigo: "#9381ff",
		},
		fontFamily: {
			openSans: ["Open Sans", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
