/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glassBg: 'rgba(0,0,0,0.3)',
        glassBorder: 'rgba(255,255,255,0.2)',
        glassText: '#E0FFFF', // neon cyan text
        neonYellow: '#FFD700',
        neonPink: '#FF4DFF',
        neonCyan: '#00FFFF',
        darkbg: '#0D0D1A',
      },
      backdropBlur: {
        xs: '6px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0,255,255,0.2)',
        neonGlow: '0 0 20px #00FFFF, 0 0 40px #FF4DFF, 0 0 60px #FFD700',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientBackground: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s forwards',
        gradientBackground: 'gradientBackground 20s ease infinite',
      },
    },
  },
  plugins: [],
}
