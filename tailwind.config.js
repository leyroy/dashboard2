/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			darkgray: "#343a40",
			white: "#fff",
			textcolor: "#c2c7d0",
			bluecolor: "rgb(0, 123, 255)",
			redcolor: "rgb(220, 53, 69)",
		},
		extend: {},
	},
	plugins: [require("tailwind-scrollbar")],
};
