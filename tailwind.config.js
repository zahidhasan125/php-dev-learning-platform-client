/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#104060',
					secondary: '#0a2440',
				}
			},
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#104060',
					secondary: '#0a2440',
				}
			},
		],
	},
}
