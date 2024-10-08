import {nextui} from '@nextui-org/theme'

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
        "background5": "url('/public/background(5).jpg')",
        "background2": "url('/public/background (2).jpg')",
        "background3": "url('/public/background (3).jpg')",
        "background4": "url('/public/background(4).jpg')",
      },
      colors: {
        'primary': '#1E1E1E',
      }
    },
  },
  darkMode: "class",
 plugins: [nextui()],
}
