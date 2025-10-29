/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Retheme the app by mapping existing purple utility classes to a
        // teal/emerald palette. This avoids changing component code that
        // references bg-purple-*, text-purple-*, etc.
        purple: {
          50: '#ecfdf5',   // emerald-50
          100: '#d1fae5',  // emerald-100
          200: '#a7f3d0',  // emerald-200
          300: '#6ee7b7',  // emerald-300
          400: '#34d399',  // emerald-400
          500: '#10b981',  // emerald-500 (primary accent)
          600: '#059669',  // emerald-600
          700: '#047857',  // emerald-700
          800: '#065f46',  // emerald-800
          900: '#064e3b',  // emerald-900
        }
      },
       border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
    },
  },
  plugins: [],
}


