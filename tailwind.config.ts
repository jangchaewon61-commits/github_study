import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cute: ['var(--font-cute)'],
        display: ['var(--font-display)'],
        accent: ['var(--font-accent)'],
      },
      colors: {
        primary: '#FF6B9D',
        secondary: '#C44569',
        accent: '#FFA8C8',
        dark: '#1a1a1a',
        light: '#f8f8f8',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in',
        slideUp: 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
