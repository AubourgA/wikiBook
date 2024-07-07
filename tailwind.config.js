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
        primary100 : "#4793D5",
        primary75 : "#88B8E2",
        primary25 : "#CEE3F5"
      },
    },
  },
  plugins: [],
}

