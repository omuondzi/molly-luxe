/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				theband: ["Space Mono", "Sans"],
			},
			colors: {
				primary: {
					default: "#ce9a9a",

					50: "#ffebeb",
					100: "#e9caca",
					200: "#d5a9a9",
					300: "#c48887",
					400: "#b26565",
					500: "#994c4c",
					600: "#773b3a",
					700: "#562a2a",
					800: "#361818",
					900: "#180505",
				},
				secondary: {
					default: "#eeff56",

					50: "#fbffdc",
					100: "#f7ffaf",
					200: "#f2ff7f",
					300: "#edff4d",
					400: "#e8ff1f",
					500: "#cee608",
					600: "#a1b300",
					700: "#738000",
					800: "#444d00",
					900: "#171b00",
				},
			},
		},
	},
	plugins: [],
};
