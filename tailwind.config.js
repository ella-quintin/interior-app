/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBrown: '#AC7A44',
        darkBrown: '#6D4C41'
      }
    },
  },
  plugins: [],
}

