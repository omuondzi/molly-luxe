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
        molly: ["Cinzel Decorative", "serif"],
        molly2: ["Playfair Display", "serif"],
      },
      colors: {
        grayish: "#EDE9DD",
      },
      backgroundImage: {
        heroImage: "url('/images/images.jpeg')",
        joiningHands: "url('/images/stem.jpg')",
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
            secondary: {
              DEFAULT: "#edddd0",

              50: "#fcf1e8",
              100: "#ead7c8",
              200: "#dabca5",
              300: "#cca382",
              400: "#bc885e",
              500: "#a36e45",
              600: "#7f5634",
              700: "#5b3d25",
              800: "#372415",
              900: "#160b01",
            },
          },
        },
      },
    }),
  ],
};
