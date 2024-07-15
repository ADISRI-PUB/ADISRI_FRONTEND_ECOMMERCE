/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {

      colors:{
        primarybutton:"#ffd992",
        homebutton:"#F4EEFF",
        onetoeightbutton:"#84cdee",
        aboutusbutton:"#a7e7d8"
    },
      boxShadow:{
          new:'0 0 5px white, 0 0 25px white, 0 0 50px white, 0 0 100px white, 0 0 200px white',
    
      }
    },
  },
  plugins: [],
}

