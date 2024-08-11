/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				slide: "backgroundSlide 120s linear infinite alternate-reverse forwards;",
				modeAndRotate: "moveAndRotate 5s infinite linear",
			},
			keyframes: {
				backgroundSlide: {
					"0%": { backgroundPosition: "0 0%" },
					"100%": { backgroundPosition: "100% 50%" },
				},
				moveAndRotate: {
					"0%": { transform: "translate(0, 0) rotate(0deg)" },
					"100%": { transform: "translate(100px, 100px) rotate(360deg)" },
				},
			},
		},
	},
	plugins: [],
}
