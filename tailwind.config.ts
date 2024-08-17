import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          '36': 'linear-gradient(0deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)',
      },
     
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.button-base': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          lineHeight: theme('lineHeight.6'),
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.md'),
          transition: 'ease-in-out',
          transitionDuration: '150ms',
        },
        '.button-primary': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.blue.600'),
          borderColor: 'transparent',
          boxShadow: theme('boxShadow.sm'),
          '&:hover': {
            backgroundColor: theme('colors.blue.700'),
          },
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.blue.700'),
            boxShadow: theme('boxShadow.outline-blue'),
          },
          '&:active': {
            backgroundColor: theme('colors.blue.700'),
          },
        },
        '.button-secondary': {
          color: theme('colors.blue.700'),
          backgroundColor: theme('colors.blue.100'),
          borderColor: 'transparent',
          boxShadow: theme('boxShadow.sm'),
          '&:hover': {
            backgroundColor: theme('colors.blue.200'),
          },
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.blue.300'),
            boxShadow: theme('boxShadow.outline-blue'),
          },
          '&:active': {
            backgroundColor: theme('colors.blue.200'),
          },
        },
        '.button-danger': {
          color: theme('colors.white'),
          backgroundColor: theme('colors.red.600'),
          borderColor: 'transparent',
          boxShadow: theme('boxShadow.sm'),
          '&:hover': {
            backgroundColor: theme('colors.red.700'),
          },
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.red.700'),
            boxShadow: theme('boxShadow.outline-red'),
          },
          '&:active': {
            backgroundColor: theme('colors.red.700'),
          },
        },
        '.button-link': {
          color: theme('colors.blue.600'),
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: theme('colors.blue.50'),
          },
          '&:focus': {
            outline: 'none',
            boxShadow: theme('boxShadow.outline-blue'),
          },
          '&:active': {
            backgroundColor: theme('colors.blue.50'),
          },
          
        },
       '.button-36': {
          background: 'linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)',
          borderRadius: '8px',
          borderStyle: 'none',
          boxSizing: 'border-box',
          color: '#FFFFFF',
          cursor: 'pointer',
          flexShrink: '0', // Converti en chaîne de caractères
          fontFamily: '"Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
          fontSize: '16px',
          fontWeight: '500', // Converti en chaîne de caractères
          padding: '0.5rem 2rem',
          textAlign: 'center',
          textShadow: 'rgba(0, 0, 0, 0.25) 0 3px 8px',
          transition: 'all .5s',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'manipulation',
          boxShadow: 'rgba(239, 239, 247, 0.2) 0 1px 30px',
          '&:hover': {
            boxShadow: 'rgba(80, 63, 205, 0.5) 0 1px 30px',
            transitionDuration: '.1s',
          },
          
        },
        '@media (min-width: 768px)': {
          '.button-36': {
            padding: '0 2.6rem',
          },
        },
        
      })
    })
  ],
};

export default config;