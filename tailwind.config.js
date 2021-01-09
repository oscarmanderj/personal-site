module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: 'Rubik, sans-serif',
        body: 'Karla, sans-serif',
      },
    },
  },
  purge: ['./content/*.md', './pages/**/*.vue', './components/**/*.vue'],
  plugins: [require('@tailwindcss/typography')],
}
