/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#05070D',
          900: '#090D16',
          850: '#0A0F1E',
          800: '#0B132B',
          700: '#101A38',
          600: '#16204A',
          500: '#1D2A5E',
        },
        synapse: {
          200: '#A6FAFF',
          300: '#7DF9FF',
          400: '#38E1FF',
          500: '#00F2FE',
          600: '#00C9E0',
        },
        cobalt: {
          400: '#7CC4FF',
          500: '#4FACFE',
          600: '#2B8BE8',
        },
        gold: {
          200: '#F7E7B4',
          300: '#F0D98C',
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B8942E',
        },
        ink: {
          DEFAULT: '#F8FAFC',
          soft: '#CBD5E1',
          mute: '#94A3B8',
          dim: '#64748B',
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'synapse-gradient': 'linear-gradient(120deg, #00F2FE 0%, #4FACFE 100%)',
        'gold-gradient': 'linear-gradient(120deg, #F0D98C 0%, #D4AF37 60%, #B8942E 100%)',
        'night-radial': 'radial-gradient(ellipse at 20% 0%, rgba(79,172,254,0.16), transparent 55%)',
      },
      boxShadow: {
        glow: '0 0 24px rgba(0,242,254,0.35), 0 0 64px rgba(0,242,254,0.12)',
        'glow-sm': '0 0 12px rgba(0,242,254,0.45)',
        'glow-gold': '0 0 24px rgba(212,175,55,0.35)',
        panel: '0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      animation: {
        'pulse-soft': 'pulseSoft 3.5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-slower': 'floatSlow 11s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'blink-dot': 'blinkDot 1.4s ease-in-out infinite',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blinkDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [],
}