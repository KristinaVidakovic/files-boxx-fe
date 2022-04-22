module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,js,jsx}", "./index.html"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        '-15': '-15deg',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
