const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
          // Custom color palette for branding
          'brand-blue': '#18327a',
          'brand-blue-dark': '#142962',
          'brand-orange': '#ee9343',
          'brand-orange-dark': '#c47937',
          'primary': '#249040',
          'primary-hover': '#217B38',
          'primary-hover-primary': 'rgb(79, 70, 229)',
          'primary-hover-primary-hover-700': '#a4411c',
          'primary-hover-500': '#EA9A72'
        }
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
