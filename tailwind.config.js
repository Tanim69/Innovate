
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1152px',
      },
      zIndex:{
        '100':'100',
      },
      backgroundImage: {
        'banner':"url('./src/assets/banner.png')",
        'box':"url('./src/assets/box.png')",
       
      },
      colors:{
        'primary': '#4CAF4F'
      },
      
    },
  },
  plugins: [require("limbcss")],
}