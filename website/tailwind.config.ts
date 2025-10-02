/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepforest: '#394508',
        limemist: '#D2FD9C',
        olivebranch: '#619111',
        olivedrab: '#77912A',
        stonegray: '#5D5D5D',
      },
    },
  },
  plugins: [],
};
