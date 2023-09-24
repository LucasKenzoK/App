/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        main : ['Bitter', 'serif']
      },
      colors :{
        black :{
          50: "#0D0D0D"
        },
        brown :{
          50: "#402E24",
          100: "#735F4D"
        },
        white : {
          50: "#D9D2BF",
          100: "#F2F2F2"
        }
      }
    },
  },
  plugins: [],
}