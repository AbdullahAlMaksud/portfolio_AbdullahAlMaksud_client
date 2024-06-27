const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['"Lato"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'playwrite-mx': ['"Playwrite MX"', 'serif'],
        'playwrite-ng-modern': ['"Playwrite NG Modern"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'ubuntu': ['"Ubuntu"', 'sans-serif'],
        'monospce': ["Inconsolata", "monospace"]
      },
    },
  },
  plugins: [],
})