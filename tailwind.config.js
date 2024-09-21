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
              DEFAULT: "#000000", // #f64c0d

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
