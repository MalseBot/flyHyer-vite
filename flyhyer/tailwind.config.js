/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        apear: {
          '0%,100%': {
            opacity: '100%',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            rotate: '3deg',
            scale: '1',
          },
          '50%': {
            transform: 'translateY(0)',
            rotate: '0deg',
            scale: '1',
          },
        },
      },
      animation: {
        apear: 'apear 5s ease-in',
        'bounce-slow': 'bounce 15s ease infinite',
      },
    },
    colors: {
      main: '#000D10',
      second: '#FFFFFF',
      grab: '#151623',
      grab2: '#BC7155',
      grab2sec: '#0F0F1C',
      'about-BG': '#8AADB2',
    },
  },
  plugins: [],
}
