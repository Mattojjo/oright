/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          50: '#FAF8F3',
          100: '#FFF8E7',
          200: '#F5E6D3',
          300: '#E8DCC8',
        },
        'brown': {
          50: '#A89A85',
          100: '#8B7355',
          200: '#7A6A53',
          300: '#5D4E37',
          400: '#4A3F2E',
        },
        'gold': {
          100: '#C4A572',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'Poppins', 'Quicksand', 'Comfortaa', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
