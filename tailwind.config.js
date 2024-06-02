/** @type {import('tailwindcss').Config} */
export default {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '1440px',
      laptop: '1024px',
      tablet: '640px',
      phone: '320px'
    },
    colors: {
      bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
      content: 'hsl(var(--color-content) / <alpha-value>)',
      accent: {
        1: 'hsl(var(--color-accent1) / <alpha-value>)',
        2: 'hsl(var(--color-accent2) / <alpha-value>)'
      }
    },
    fontFamily: {
      'reddit-mono': ['"Reddit Mono"', 'sans-serif']
    },
    extend: {}
  },
  darkMode: 'selector',
  plugins: []
}
