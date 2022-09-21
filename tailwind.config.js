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
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -70px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-30px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
      fontFamily: {
        sans: ['glacial-regular', 'ui-sans-serif', 'system-ui'],
        'glacial-bold': ['glacial-bold', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        muddy: {
          DEFAULT: '#DF8876',
        },
        orangy: {
          DEFAULT: '#FFBA6A',
        },
        yellowish: {
          DEFAULT: '#F9F871',
        },
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
