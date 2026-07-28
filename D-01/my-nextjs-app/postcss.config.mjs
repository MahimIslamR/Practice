/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // ONLY this plugin goes here in Tailwind v4!
  },
};

export default config;