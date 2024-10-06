// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: ["@storyblok/nuxt"],
    storyblok: {
        accessToken: process.env.STORYBLOK_PREVIEW,
        bridge: process.env.NUXT_ENV === "development" ? true : false,
        devtools: true,
    },
});
