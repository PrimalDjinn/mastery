// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["reka-ui/nuxt", "@nuxt/fonts", "@nuxt/scripts", "@nuxt/image", "@nuxt/icon"],
	future: {
		compatibilityVersion: 4,
	},
	nitro: {
		imports: {
			dirs: ["./shared/utils", "./shared/types"],
		},
	},
	imports: {
		dirs: ["../shared/types", "../shared/utils"],
	},
	extends: ["github:kgarchie/nuxt-starter#1"],
	icon: {
		customCollections: [
			{
				dir: "./assets/icons",
				prefix: "local",
			},
		],
	},
});
