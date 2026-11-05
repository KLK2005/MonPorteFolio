import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        ink: {
          DEFAULT: '#0B1220',
          soft: '#132033',
          mid: '#1B2C44',
        },
        gold: {
          DEFAULT: '#C4A35A',
          light: '#E8D7A8',
          deep: '#8F7333',
        },
        cream: {
          DEFAULT: '#F6F3ED',
          dark: '#EBE4D8',
        },
        stone: {
          DEFAULT: '#5C6670',
          soft: '#8B939C',
        },
        silver: {
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#A8A8A8',
          500: '#808080',
          600: '#666666',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 18px 50px -20px rgba(196, 163, 90, 0.55)',
      },
    },
  },
  plugins: [],
}
export default config
