/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      "purple-dark": "#5c2dd5",
      purple: "#7945ff",
      pink: "#FD6687",
      yellow: "#FFCE67",
      white: "#FFFFFF",
    },
    fontSize: {
      lg: ["56px", { lineHeight: "71px" }],
      md: ["24px", { lineHeight: "31px" }],
      sm: ["20px", { lineHeight: "26px" }],
      xs: ["16px", { lineHeight: "21px" }],
    },
    boxShadow: {
      DEFAULT: "0 10px 0",
    },
    borderWidth: {
      DEFAULT: '3px'
    },
    extend: {},
  },
  plugins: [],
};
