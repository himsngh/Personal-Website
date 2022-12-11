/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-gloss': '#0D1629',
        'heading': '#3D9DE9',
      },
      fontFamily: {
        'heading': ['Vollkorn', 'serif'],
      },
    },
  },
  plugins: [],
}
