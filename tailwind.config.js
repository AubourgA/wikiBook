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
        primary100 : "#a57854",
        primary50 : "#F6EEE0",
        secondary : "#e46f33",
        dark : "#003060",
        light: "#ffffff"
      },
    },
  },
  plugins: [],
}

