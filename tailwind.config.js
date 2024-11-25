/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c2',
          300: '#ffa198',
          400: '#ff6b5b',
          500: '#ff4d38',
          600: '#ed3419',
          700: '#c52a13',
          800: '#9c2515',
          900: '#7e2314',
        },
        navy: {
          900: '#1e1b4b',
          800: '#2e2a5f',
        }
      },
      animation: {
        blob: 'blob 8s infinite',
      },
    },
  },
  plugins: [],
};