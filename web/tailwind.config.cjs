/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
      backgroundImage: {
        'falcao': "url('core.png')",
      }
    },
  },
  plugins: [],
}
