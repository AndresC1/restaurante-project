/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color_hueso': '#f7f7f7',
        'color_blanco': '#f1f1f1',
        'color_naranja': '#E28754',
      }
    },
  },
  plugins: [],
}