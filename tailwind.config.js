/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-1': ['clamp(2.7rem, 6.5vw, 10rem)'],
        'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
        'heading-3': ['clamp(2rem, 5vw, 2.75rem)'],
        'heading-4': ['clamp(1.5rem, 5vw, 2.5rem)'],
        'works-title': ['clamp(1.25rem, 2vw, 1.5rem)'],
        'body-1': ['clamp(1.1rem, 2vw, 1.3rem)'],
        'body-2': ['clamp(1rem, 1.5vw, 1.5rem)'],
        'body-3': '1.1rem',
        'body-4': ['clamp(0.75rem, 3vw, 1rem)'],
      },
      letterSpacing: {
        headings: '-0.03em',
      },
      fontFamily: {
        general: ['GeneralSans-Variable', 'sans-serif'],
        grotesk: ['CabinetGrotesk-Variable', 'sans-serif'],
        boska: ['Boska', 'sans-serif'],
      },
      colors: {
        'white-body-font': '#F2F2F2',
        'white-bg': '#FAFAF0',
        'primary-lines': '#D9D9D9',
        'big-nums': '#666666',
        'black-body-font': '#333333',
        'black-bg': '#222',
        'buttons-bg': '#393632',
        'secondary-500': '#AEAE9D',
        'secondary-600': '#8C8C73',
        'secondary-700': '#70705C',
        'secondary-800': '#C93D4B',
        'secondary-900': '#8F3F47',
        'accent-400': '#0E0E0C',
        'accent-300': '#262626',
        'accent-200': '#4D4D4D',
        'accent-100': '#666666',
      },
    },
  },
  plugins: [],
};
