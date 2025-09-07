module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#34967C',
        'custom-gray': '#657786',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}