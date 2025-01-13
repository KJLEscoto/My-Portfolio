/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0D0D0D',
        'white': '#FFFFFF',
        'gray-500': '#A0A0A0',
        'dark-blue': '#6182AE',
        'red-500': '#FF2D20',
        'darkest-blue': '#465f80'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

