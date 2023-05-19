/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature : ["Poppins"]
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}