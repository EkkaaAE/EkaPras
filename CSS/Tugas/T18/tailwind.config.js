/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/pages/**/*.{*html}"],
  theme: {
    extend: {
      colors: {
        'safety-orange': '#FF7E1F',
        'peach-yellow': '#E1CC97',
        'bistre': '#35291E',
      },
    },
  },
  plugins: [],
}

