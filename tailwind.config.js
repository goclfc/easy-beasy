/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryGray:"#8692A6",
        primaryBlue:"#1565D8",
        primaryBlueText:"#2280EF",
        primaryTextGray:"#5B5B5B",
        primaryPlaceHolder:"#8692A6"
      },
      fontFamily:{
        robotoLight:["Roboto","sans-serif"]
        
      }
    },
  },
  plugins: [],
}