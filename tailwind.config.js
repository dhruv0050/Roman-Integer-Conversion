/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["Nunito Sans", "sans-serif"],
        'tertiary' : ["Gruppo", "sans-serif"]
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4CA1AF, #2C3E50)', 
      }
    },
  },
  plugins: [],
}
