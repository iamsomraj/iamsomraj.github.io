/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      colors: {
        dark: {
          DEFAULT: '#171716',
        },
        ash: {
          DEFAULT: '#323232',
        },
        mint: {
          DEFAULT: '#DFEEEE',
        },
        skin: {
          DEFAULT: '#FBF9ED',
        },
      },
    },
  },
  plugins: [],
}
