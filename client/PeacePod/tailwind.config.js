/** @type {import('tailwindcss').Config} */
// import image from './public/images'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xss' : '440px',
        'xxl' : '1800px',
      },
      backgroundImage:{
        'hero': "url('./public/images/bg-home.jpg')"
      },
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      // },
    },
  },
  plugins: [],
}

