const localeSettings = [
  { code: "de", language: "de-DE" },
  { code: "en", language: "en-US" },
  { code: "es", language: "es-ES" },
];

const isDevelopment = process.env.NODE_ENV === "development";
const baseURL = process.env.NUXT_APP_BASE_URL
  ? process.env.NUXT_APP_BASE_URL
  : null;

export default defineNuxtConfig({
  i18n: {
    baseUrl: isDevelopment
      ? "http://localhost:3000"
      : "https://edge.cloudlab.d-h.io",
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    //locale: "de",
    //defaultLocale: "de",
    strategy: "prefix",
    locales: localeSettings,
    vueI18n: "./i18n.config.js",
  },
  vite: {
    server: {
      fs: {
        allow: [".."],
      },
      allowedHosts: true,
    },
  },
  modules: [
    [
      "shared-components",
      {
        theme: "gk",
      },
    ],
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@pinia/nuxt",
    "nuxt-swiper",
    ...(isDevelopment ? [] : ["nuxt-security"]),
  ],
  security: {
    headers: {
      contentSecurityPolicy: {
        "img-src": ["'self'", "data: https: res.cloudinary.com"],
      },
    },
  },
});
