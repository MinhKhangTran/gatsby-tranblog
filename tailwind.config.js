const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      lime: colors.lime,
      emerald: colors.emerald,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
