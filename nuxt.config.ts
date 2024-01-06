export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.css'],
  modules: ['nuxt-icon', '@nuxt/ui', '@pinia/nuxt', "@pinia-plugin-persistedstate/nuxt", '@nuxtjs/i18n'
],
i18n: {
  vueI18n: './i18n.config.ts'
},
colorMode: {
  preference: 'light', // default value of $colorMode.preference
  fallback: 'light', // fallback value if not system preference found
  hid: 'nuxt-color-mode-script',
  globalName: '__NUXT_COLOR_MODE__',
  componentName: 'ColorScheme',
  classPrefix: '',
  classSuffix: '-mode',
  storageKey: 'nuxt-color-mode'
},
  postcss: {
      plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
