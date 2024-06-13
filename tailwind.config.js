/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainColor: "#080404",
				brownColor: "#49391F",
				brownShade: "#9C9677",
				grayColor: "#241E21",
			},
		},
	},
	plugins: [],
};
