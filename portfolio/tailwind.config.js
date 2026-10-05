/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F6F1E7', deep: '#EDE5D5' },
        ink: { DEFAULT: '#1F1D1B', soft: '#58534D' },
        wine: { DEFAULT: '#6B1E2E', light: '#8E3447', tint: '#EBD9D8' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spinSlow 28s linear infinite',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
