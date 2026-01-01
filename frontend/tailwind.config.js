/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'camino-orange': '#FF6B35',
        'camino-orange-dark': '#E85A2D',
        'camino-bg': '#FAF7F0',
        'camino-charcoal': '#2C2C2C',
        'camino-blue': '#4A90E2',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
        'card-lg': '28px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

