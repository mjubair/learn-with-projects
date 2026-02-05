module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        indigo: {
          700: '#4338CA',
        },
        neutral: {
          900: '#171717',
          600: '#525252',
        },
        gray: {
          50: '#F9FAFB',
          100: '#D2D6DB',
        },
      },
      fontSize: {
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
      },
    },
  },
  plugins: [],
};
