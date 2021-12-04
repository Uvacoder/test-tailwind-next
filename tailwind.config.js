module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/bg.svg')",
        'phone-svg':
          "url('https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/phoneblob.svg')",
        products:
          "url('https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/Confetti-Doodles.svg')"
      },
      animation: {
        floating: 'float 4s ease-in-out 0s infinite'
      },
      keyframes: {
        floating: {
          '0%': {
            transform: 'translatey(0px)'
          },
          '50%': {
            transform: 'translatey(-10px)'
          },
          '100%': {
            transform: 'translatey(0px)'
          }
        }
      },
      height: {
        98: '30rem',
        102: '34rem'
      }
    }
  },
  variants: {
    extend: {
      translate: ['motion-safe']
    }
  },
  plugins: []
};
