/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:
        {
          sm:"768px",
          md:"1024px",
          lg:"1280px",
          xl:"1536px"
        },
      colors:
        {
          light:"#f9fafb",
          "light-1":"#ffffff"
        }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}