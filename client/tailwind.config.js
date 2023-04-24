/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons'
      },
      colors: {
        raisingBlack: '#1E1E24',
        seaShell: '#F7EBE8',
        jett: '#444140',
        atomicTangerine: '#FFA987'
      }
    }
  },
  plugins: []
}
