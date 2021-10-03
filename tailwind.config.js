module.exports = {
  darkMode: false,
  mode: 'jit',
  plugins: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './config/**/*.{js,ts,jsx,tsx}'],
  theme: {
      container: {
          padding: {
              '2xl': '4rem',
              DEFAULT: '1rem',
              lg: '2rem',
              sm: '1rem',
              xl: '3rem',
          },
      },
      extend: {
          backgroundImage: () => ({}),
          borderRadius: {
              infinity: '10px',
          },
          boxShadow: {
              infinity: '0px 4px 4px rgba(0, 0, 0, 0.25)'
          },
          colors: {
              'infinity-hero': '#FCF0EC',
              'modal': 'rgba(0, 0, 0, 0.42)',
              'darkBlue': '#182655',
          },
          fontFamily: {
            primary: ['Poppins', 'sans-serif'],
        },
      },
  },
  variants: {
      extend: {},
  },
};
