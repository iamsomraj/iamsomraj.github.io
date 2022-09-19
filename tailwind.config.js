/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['glacial-regular', 'ui-sans-serif', 'system-ui'],
        'glacial-bold': ['glacial-bold', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
