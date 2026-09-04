/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./data.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A2540',
          navyLight: '#11355A',
          accent: '#D9822B',
          amber: '#F59E0B',
          blue: '#1D68A6',
          slate: '#0F172A',
          surface: '#F8FAFC',
          dark: '#0F172A'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      }
    },
  },
  plugins: [],
}
