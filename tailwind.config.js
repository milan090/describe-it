module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    stroke: (theme) => ({
      primary: theme("colors.primary"),
      grey: theme("colors.gray.500"),
      white: theme("colors.white"),
      dark: theme("colors.dark"),
    }),
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#50B3C9",
        "light-blue": "#DFF2FF",
        light: "#fff", // #DFE4E7
        "light-secondary": "#D6DFE6",
        dark: "#254766",
        "dark-secondary": "#051D20",
      },
    },
  },
  variants: {
    extend: {
      stroke: ["dark"],
    },
  },
  plugins: [],
};
