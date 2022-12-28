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
        'color_verde': '#ADC59C',
        'degradado_primario': '#f2f0f1',
        'degradado_secundario': '#c2bdbe',
        'color_fondo_modal': 'RGBA(0,0,0,0.16)'
      }
    },
  },
  plugins: [],
}
