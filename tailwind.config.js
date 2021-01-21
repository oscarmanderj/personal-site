module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: 'Rubik, sans-serif',
        body: 'Karla, sans-serif',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#666',
            a: {
              'text-decoration': 'none',
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  purge: {
    content: [
      'content/articles/*.md',
      './pages/**/*.vue',
      './components/**/*.vue',
    ],
  },
  plugins: [require('@tailwindcss/typography')],
}
