/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'military-green': '#4a5f4f',
        'military-green-light': '#6b8e6b',
      },
    },
  },
  plugins: [],
}