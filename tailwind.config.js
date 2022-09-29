/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18171F',
        'primary-light': '#24232C',
        secondary: '#817D92',
        'secondary-light': '#E6E5EA',
        green: '#A4FFAF',
        red: '#F64A4A',
        orange: '#FB7C58',
        yellow: '#F8CD65',
      },
      fontFamily: { jetbrains: ['JetBrains Mono', 'monospace'] },
      fontSize: {
        'heading-lg': [
          '2rem',
          {
            lineHeight: '2.6875rem',
            fontWeight: '800',
          },
        ],
        'heading-md': [
          '1.5rem',
          {
            lineHeight: '1.9375rem',
            fontWeight: '800',
          },
        ],
        body: [
          '1.125rem',
          {
            lineHeight: '1.4375rem',
            fontWeight: '800',
          },
        ],
      },
      backgroundImage: { 'check-icon': "url('../assets/icon-check.svg')" },
    },
  },
  plugins: [],
};
