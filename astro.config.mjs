import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import netlify from "@astrojs/netlify"

import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), preact()],
	output: "server",
	adapter: netlify(),
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
		fallback: {
			en: "es",
		},
	}
})
