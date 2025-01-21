/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto'],
      },
      colors: {
        flax: '#EAD985',
        'metallic-seaweed': '#007990',
        'space-cadet': '#222E50',
        zomp: '#439A86',
        'jet-stream': '#BCD8C1',
      },
    },
  },
  plugins: [],
};
