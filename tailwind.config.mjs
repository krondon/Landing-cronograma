/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: '#0B192C',
          900: '#060E1C',
          800: '#0B192C',
          700: '#112236',
          600: '#162B43',
          500: '#1E3A57',
        },
        electric: {
          DEFAULT: '#008DDA',
          light: '#33A8E8',
          dark: '#006BB0',
        },
        fire: {
          DEFAULT: '#F86F03',
          light: '#FF8C35',
          dark: '#D45C00',
        },
        neon: {
          DEFAULT: '#00FFAB',
          dim: '#41B06E',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-electric': '0 0 20px rgba(0,141,218,0.4), 0 0 60px rgba(0,141,218,0.15)',
        'neon-fire':     '0 0 20px rgba(248,111,3,0.4),  0 0 60px rgba(248,111,3,0.15)',
        'neon-green':    '0 0 20px rgba(0,255,171,0.4),  0 0 60px rgba(0,255,171,0.15)',
        glass:           '0 8px 32px 0 rgba(0,0,0,0.37)',
        'glass-lg':      '0 24px 64px 0 rgba(0,0,0,0.5)',
      },
      animation: {
        'aurora-1':   'aurora1 14s ease-in-out infinite',
        'aurora-2':   'aurora2 18s ease-in-out infinite',
        'aurora-3':   'aurora3 22s ease-in-out infinite',
        'border-glow':'borderGlow 3s ease-in-out infinite',
        'badge-blink':'blink 2s ease-in-out infinite',
      },
      keyframes: {
        aurora1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)',      opacity: '0.55' },
          '33%':       { transform: 'translate(6%, -10%) scale(1.1)', opacity: '0.75' },
          '66%':       { transform: 'translate(-5%, 7%) scale(0.92)', opacity: '0.45' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)',        opacity: '0.45' },
          '40%':       { transform: 'translate(-8%, 12%) scale(1.18)', opacity: '0.65' },
          '70%':       { transform: 'translate(7%, -6%) scale(0.88)',  opacity: '0.35' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)',         opacity: '0.4' },
          '50%':       { transform: 'translate(10%, -14%) scale(1.22)', opacity: '0.6' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,141,218,0)' },
          '50%':       { boxShadow: '0 0 0 3px rgba(0,141,218,0.3)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
};
