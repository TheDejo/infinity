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
          },
          dropShadow: {
              'nfs-maps': '0px 3px 5px rgba(9, 30, 66, 0.2)) drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)',
          },
          fontFamily: {
            primary: ['Poppins', 'sans-serif'],
        },
          screens: {
              '2xl': '1536px',
              '3xl': '1600px',
          },
      },
  },
  variants: {
      extend: {},
  },
};
