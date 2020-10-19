module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue-main': '#0858c0',
        'blue-main-hover': '#0050b7',
      },
      spacing: {
      72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
};
