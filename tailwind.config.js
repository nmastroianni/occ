/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{.css,.html}'],
  theme: {
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
