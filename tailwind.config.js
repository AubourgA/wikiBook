/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Primary : ["Roboto", "sans-serif"],
        Secondary : [ "Raleway", "sans-serif"]
      },
      colors: {
        primary100 : "#754C21",
        primary75 : "#A3784A",
        primary25 : "#D2B48C"
      },
    },
  },
  plugins: [],
}

