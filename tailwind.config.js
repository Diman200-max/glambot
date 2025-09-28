/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1000px 500px at 0% 0%, rgba(62,0,124,0.35), transparent 60%), radial-gradient(800px 400px at 100% 0%, rgba(0,173,255,0.28), transparent 60%), linear-gradient(180deg, #0a0b0f 0%, #0b0d14 100%)'
      },
      colors: {
        brand: { 400:"#0ecfff" }
      }
    }
  },
  plugins: [],
};
