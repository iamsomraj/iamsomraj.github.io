/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#f7AB0A',
        'off-white': '#fbf9ed',
        'dark-gray': '#323232',
        'mint-green': '#dfeeee',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
