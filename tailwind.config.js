const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6347",
        background: 'rgb(0, 0, 29)',
      },
      spacing: {
        128: "32rem", // Custom spacing
      },
      fontFamily: {
        bodoni: ['Bodoni', 'serif'],
        bodoni72: ['Bodoni72', 'serif'],
        harmony: ['Harmony', 'serif'],
        faculty: ['Faculty', 'sans-serif'],
        moon: ['Moon', 'sans-serif'],
        junicodereg: ['Junicode-Reg', 'sans-serif'],
        junicodecon: ['Junicode-RegCon', 'sans-serif'],
        junicodeboldcon: ['Junicode-BoldCon', 'sans-serif'],
        junicodebold: ['Junicode-Bold', 'sans-serif'],
      },
      keyframes: {
        flash: {
          '0%, 100%': { color: 'white' },  // Text color is white at start and end
          '50%': { color: 'transparent' }, // Midway color is transparent
        },
      },
      animation: {
        flash: 'flash 0.2s ease-in-out', // Apply the flash keyframes with duration
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              fontFamily: 'Junicode-Bold',
              fontSize: '1.875rem', // Equivalent to text-2xl
              color: '#ffffff',
            },
            p: {
              fontFamily: 'Junicode-Reg',
              fontSize: '1.125rem', // Equivalent to text-lg
              color: '#ffffff',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
});
