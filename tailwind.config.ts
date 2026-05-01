import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F2EC',
        surface: '#EDE8DF',
        sage: {
          DEFAULT: '#8A9E7F',
          dark: '#5C7A52',
        },
        earth: '#BFA980',
        bark: '#4A3F35',
        mist: '#CDD5C8',
        white: '#FDFAF5',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
