export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-12-31',
  runtimeConfig: {
    public: {
      baseURL: 'https://localhost:7075/api',
    },
  }
});