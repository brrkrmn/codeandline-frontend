const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['DM Sans', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'gradient': 'gradient 10s ease infinite',
        'slide': 'slideInFromTop 1s ease-in-out'
      },
      keyframes: {
        'gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'slideInFromTop': {
          '0%': {
            'transform': 'translateY(-6%)',
            'opacity': 0
          },
          '100%': {
            'transform': 'translateY(0)',
            'opacity': 1
          }
        }
      },
      dropShadow: {
        'sm': '0 0 1px #bf97ff',
        'md': '0 0 6px #bf97ff',
        'lg': '0 0 20px #bf97ff',
      },
    },
    screens: {
      'mobile': '425px',
      'tablet': '640px',
      'laptop': '1024px',
      'wide': '1500px'
    }
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: '#030014',
          foreground: {
            primary: '#cecdd1',
            secondary: '#efedfdb3',
            dark: '#efedfd99',
            placeholder: '#8f8ca199'
          },
          divider: '#ffffff1a',
          border: '#ffffff14',
          primary: {
            dark: '#bf97ff70',
            light: '#bf97ff',
            background: '#f3eeff0f'
          },
          danger: '#f31260',
          content1: '#100d1e'
        },
        layout: {
          boxShadow: {
            small: "inset 0 0 10px #ffffff1a",
            medium: "inset 0 0 10px #bf97ff70",
          }
        }
      }
    }
  })],
}