/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','-apple-system','Inter','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','Apple Color Emoji','Segoe UI Emoji']
      },
      colors: {
        brand: {
          50: "#e5fcff",
          100: "#bdf4ff",
          200: "#7beaff",
          300: "#3ee0ff",
          400: "#0ecfff",
          500: "#00bcd4",
          600: "#00a0b5",
          700: "#007a8d",
          800: "#005e6e",
          900: "#004b59"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 0% 0%, rgba(62,0,124,0.35), transparent 60%), radial-gradient(1000px 500px at 100% 0%, rgba(0,173,255,0.28), transparent 60%), linear-gradient(180deg, #0a0b0f 0%, #0b0d14 100%)'
      }
    },
  },
  plugins: [],
};
