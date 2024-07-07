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
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },

    },
  },
  plugins: [],
})