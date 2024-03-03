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
			lightblue: "rgb(23, 162, 184)",
			greencolor: "rgb(40, 167, 69)",
			yelow: "rgb(255, 193, 7)",
			lightred: "rgb(220, 53, 69)",
		},
		extend: {},
	},
	plugins: [require("tailwind-scrollbar")],
};
