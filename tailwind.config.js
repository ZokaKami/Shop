export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".//components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'], // Define the custom font
      },
    },
  },
  plugins: [],
}