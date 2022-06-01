module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        's' : {'min': '320px'},
        'm' : {'min' : '375px'},
        'l' : {'min' : '425px'},
        'tablet' : {'min' : '768px'},
        'laptop' : {'min' : '1200px'}
      }
    },
    screens: {

    }
  },
  plugins: [],
}