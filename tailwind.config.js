/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

