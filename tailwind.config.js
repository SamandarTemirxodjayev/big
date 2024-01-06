/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      textColor: {
        'secondary': '#323750',
      },
      colors: {
        primary: '#091E3A',
        secondary: '#323750',
        thirdColor: '#1950DD',
        fourColor: '#0B244C ',
        fiveColor: '#fff',
      },
    },
  },
  darkMode: 'class',
  plugins: [
  
  ],
}