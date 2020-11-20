const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      lime: colors.lime,
      emerald: colors.emerald,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
