/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgBody: "#090E26",//#040022
        mainColor : "#FFB400",
        darkBody: "#10121B",
        
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
        "linear-gradient(90deg, rgba(29,169,198,1) 0%, rgba(163,51,187,1) 25%, rgba(190,19,161,1) 42%, rgba(200,13,105,1) 66%, rgba(237,230,0,1) 100%)",
        
        "gradient-rainblue":
        "linear-gradient(98.68deg, #0FCDE7 -18.52%, #5463C1 46.74%, #DD118B 119.45%)"
      }),
      fontFamily : {
        poppins : ["Poppins","serif"],
        montserrat : ["Montserrat"],
        clickerScript : ["Clicker Script" ,"cursive"]
      },
      screens : {
        xs : "480px",
        sm :"768px",
        md : "1060px"
      },
      content: {
        brush: "url('./assets/brush.png')",
       
      },
    },
  },
  plugins: [],
}
