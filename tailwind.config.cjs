/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00',
        secondary: '#008B8B',
        dark: '#333333',
        light: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
