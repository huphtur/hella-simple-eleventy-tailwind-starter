module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{html,liquid}'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {},
  plugins: [],
};
