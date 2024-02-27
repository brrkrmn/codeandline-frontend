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
        'gradient': 'gradient 10s ease infinite'
      },
      keyframes: {
        'gradient': {
          '0%, 100%': {
            'background-size':'200% 200%',
             'background-position': 'left center'
         },
         '50%': {
            'background-size':'200% 200%',
             'background-position': 'right center'
          }
        }
      }
    },
    screens: {
      'mobile': '425px',
      'tablet': '640px',
      'laptop': '1024px'
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
          },
          divider: '#ffffff1a',
          border: '#ffffff14',
          primary: {
            dark: '#bf97ff70',
            light: '#bf97ff',
            background: '#f3eeff0f'
          },
          danger: '#ff5530',
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