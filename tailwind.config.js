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
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
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
          light: '#0070F3', // Light theme accent color
          dark: '#4FD1C5'   // Dark theme accent color
        },
        background: {
          light: '#FFFFFF', // Light theme background color
          dark: '#1A202C'   // Dark theme background color
        },
        text: {
          light: '#000000', // Light theme text color
          dark: '#E2E8F0'   // Dark theme text color
        }
      }
    },
  },
  darkMode: 'class', // Enables class-based dark mode toggling
  plugins: [nextui()],
};
