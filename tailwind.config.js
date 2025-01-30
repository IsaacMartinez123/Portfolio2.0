/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayDark: '#454546',
        grayMedium: '#666666',
        grayLight: '#8c8c8c',
        cyan: '#5dc1b9',
        cyanLight: '#8ae0db',
      },
    },
  },
  plugins: [],
}

