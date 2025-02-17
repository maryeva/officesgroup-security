/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fde8e9',
          DEFAULT: '#a20b14',
        },
      },
    },
  },
}
