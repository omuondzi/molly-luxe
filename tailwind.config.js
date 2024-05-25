import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				cred: ["Montserrat", "Sans"],
			},
			colors: {
				grayish: "#EDE9DD",
			},
			backgroundImage: {
				heroImage: "url('/images/hero.jpg')",
				joiningHands: "url('/images/joining-hands.png')",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				credTheme: {
					colors: {
						primary: {
							DEFAULT: "#f64c0d",

							50: "#ffeade",
							100: "#ffc6b1",
							200: "#fca382",
							300: "#fa7f52",
							400: "#f75b22",
							500: "#dd4208",
							600: "#ad3205",
							700: "#7c2403",
							800: "#4c1400",
							900: "#200300",
						},
						black: {
							DEFAULT: "#000000",

							50: "#f2f2f2",
							100: "#d9d9d9",
							200: "#bfbfbf",
							300: "#a6a6a6",
							400: "#8c8c8c",
							500: "#737373",
							600: "#595959",
							700: "#404040",
							800: "#262626",
							900: "#0d0d0d",
						},
					},
				},
			},
		}),
	],
};
