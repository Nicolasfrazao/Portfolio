const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        lightSaber: {
          "0%": { borderTopColor: "rgba(0, 255, 0, 1)", borderRightColor: "transparent", borderBottomColor: "transparent", borderLeftColor: "transparent" },
          "25%": { borderTopColor: "transparent", borderRightColor: "rgba(0, 255, 0, 1)", borderBottomColor: "transparent", borderLeftColor: "transparent" },
          "50%": { borderTopColor: "transparent", borderRightColor: "transparent", borderBottomColor: "rgba(0, 255, 0, 1)", borderLeftColor: "transparent" },
          "75%": { borderTopColor: "transparent", borderRightColor: "transparent", borderBottomColor: "transparent", borderLeftColor: "rgba(0, 255, 0, 1)" },
          "100%": { borderTopColor: "rgba(0, 255, 0, 1)", borderRightColor: "transparent", borderBottomColor: "transparent", borderLeftColor: "transparent" },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-out': 'fade-out 0.5s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-in-out',
        'slide-out': 'slide-out 0.5s ease-in-out',
        'lightSaber': 'lightSaber 2s infinite',
        'spin-slow': 'spin 5s linear infinite',
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        serif: ["var(--font-serif)"],
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
      backgroundImage: {
        'background1': "url('/public/background (1).jpg')",
        'background2': "url('/public/background (2).jpg')",
        'background3': "url('/public/background (3).jpg')",
        'background4': "url('/public/background (3).jpg')",
        'background5': "url('/public/background(5).jpg')",
      },
      colors: {
        primary: {
          DEFAULT: '#1E1E1E',
          light: '#FFFFFF',
          dark: '#000000'
        },
        accent: {
          light: '#0070F3',
          dark: '#4FD1C5'
        },
        background: {
          light: '#FFFFFF',
          dark: '#1A202C'
        },
        text: {
          light: '#000000',
          dark: '#E2E8F0'
        },
      }
    },
  },
  darkMode: 'class', // Enables class-based dark mode toggling
  plugins: [nextui()],
};
