/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary : ["Vidaloka", "serif"],
        secondary : ["Bona Nova SC", "serif"],
        normal : ["Nunito", "sans-serif"]
        
      },
      colors: {
        primary100 : "#a57854",
        primary50 : "#f6f0e2",
        primary25 : "#f1f1f1",
        secondary : "#e46f33",
        dark : "#003060",
        light: "#ffffff",
        error: "#842029",
        
      },
    },
  },
  plugins: [],
}

