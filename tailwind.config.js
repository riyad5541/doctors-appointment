/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        doctorstheme:{
          primary:'#570DF8',
          secondary:'#3ABFF8',
          accent:'#3A4256',
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
